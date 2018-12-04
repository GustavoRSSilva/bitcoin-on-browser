import { takeLatest, put, call, select } from 'redux-saga/effects';

import { createTransactionFromMnemonic } from 'utils/bitcoin';
import { pushRawTransaction } from 'utils/insightAPI';
import { BTC, USD, SAT } from 'utils/constants';
import { convertCryptoFromUnitToUnit } from 'utils/conversion';
import { selectUtxosForTransaction } from 'utils/transactions';

import { getMnemonic } from 'containers/App/saga';
import {
  selectActiveAddressFetchState,
  selectNetworkId,
  selectAddressUtxosFetchState,
  selectEstimatedFeesFetchState,
} from 'containers/App/selectors';

import {
  AMOUNT_CRYPTO,
  UNIT_CRYPTO,
  AMOUNT_FIAT,
  UNIT_FIAT,
  ADDRESS_TO,
  ADDRESS_FROM,
  ADDRESS_FROM_UTXOS,
  FEE,
  RESET_FORM_VALUES,
  SUBMIT_FORM,
} from './constants';
import {
  setFormValues,
  submitFormRejected,
  submitFormSuccessful,
} from './actions';

export const getDefaultFormValues = (
  activeAddress = null,
  addressUtxos = [],
  fee = '0',
) => ({
  [AMOUNT_CRYPTO]: '0',
  [UNIT_CRYPTO]: BTC,
  [AMOUNT_FIAT]: '0',
  [UNIT_FIAT]: USD,
  [ADDRESS_TO]: '',
  [ADDRESS_FROM]: activeAddress || '',
  [ADDRESS_FROM_UTXOS]: addressUtxos || [],
  [FEE]: fee,
});

// Watcher sagas
function* callResetFormValues() {
  const activeAddressFetchState = yield select(selectActiveAddressFetchState());
  const activeAddress = activeAddressFetchState.data;
  const addressUtxosFetchState = yield select(selectAddressUtxosFetchState());
  const addressUtxos = addressUtxosFetchState.data;
  const networkId = yield select(selectNetworkId());
  const estimatedFeesFetchState = yield select(selectEstimatedFeesFetchState());
  const estimatedFees =
    estimatedFeesFetchState.data && estimatedFeesFetchState.data[networkId]
      ? estimatedFeesFetchState.data[networkId]
      : 2500;
  yield put(
    setFormValues(
      getDefaultFormValues(activeAddress, addressUtxos, estimatedFees),
    ),
  );
}

function* callSubmitForm({ payload }) {
  try {
    //  TODO remove mnemonic from the equation, work with root/node only
    const mnemonic = yield getMnemonic();

    const amountCrypto = parseFloat(payload[AMOUNT_CRYPTO]);
    const unitCrypto = payload[UNIT_CRYPTO];
    const fee = parseFloat(payload[FEE]);
    const receiverAmount = parseFloat(
      convertCryptoFromUnitToUnit(amountCrypto, unitCrypto, SAT),
    );
    const addressTo = payload[ADDRESS_TO];
    const addressFrom = payload[ADDRESS_FROM];

    const utxos = payload[ADDRESS_FROM_UTXOS];
    const txTotal = receiverAmount + fee;
    const txUtxos = selectUtxosForTransaction(utxos, txTotal);

    const availableUtxos = txUtxos.filter(utxo => utxo.enabled);

    const networkId = yield select(selectNetworkId());

    const tx = createTransactionFromMnemonic(
      mnemonic,
      availableUtxos,
      receiverAmount,
      addressTo,
      addressFrom,
      fee,
      networkId,
    );

    const result = yield call(
      pushRawTransaction,
      networkId,
      JSON.stringify({ rawtx: tx }),
    );

    //  Test resutl
    yield put(submitFormSuccessful(result.data));
  } catch (e) {
    yield put(submitFormRejected(e));
  }
}

function* resetFormValuesSaga() {
  yield takeLatest(RESET_FORM_VALUES, callResetFormValues);
}

function* submitFormSaga() {
  yield takeLatest(SUBMIT_FORM, callSubmitForm);
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [resetFormValuesSaga(), submitFormSaga()];
}
