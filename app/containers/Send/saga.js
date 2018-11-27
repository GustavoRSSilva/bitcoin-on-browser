import { takeLatest, put, select } from 'redux-saga/effects';

import { createTransactionFromMnemonic } from 'utils/bitcoin';
import { BTC, USD, SAT } from 'utils/constants';
import { convertCryptoFromUnitToUnit } from 'utils/conversion';

import { getMnemonic } from 'containers/App/saga';
import {
  selectActiveAddressFetchState,
  selectNetworkId,
  selectAddressUtxosFetchState,
} from 'containers/App/selectors';

import {
  AMOUNT_CRYPTO,
  UNIT_CRYPTO,
  AMOUNT_FIAT,
  UNIT_FIAT,
  ADDRESS_TO,
  ADDRESS_FROM,
  ADDRESS_FROM_UTXOS,
  RESET_FORM_VALUES,
  SUBMIT_FORM,
} from './constants';
import { setFormValues } from './actions';

export const getDefaultFormValues = (
  activeAddress = null,
  addressUtxos = [],
) => ({
  [AMOUNT_CRYPTO]: '0',
  [UNIT_CRYPTO]: BTC,
  [AMOUNT_FIAT]: '0',
  [UNIT_FIAT]: USD,
  [ADDRESS_TO]: '',
  [ADDRESS_FROM]: activeAddress || '',
  [ADDRESS_FROM_UTXOS]: addressUtxos || [],
});

// Watcher sagas
function* callResetFormValues() {
  const activeAddressFetchState = yield select(selectActiveAddressFetchState());
  const activeAddress = activeAddressFetchState.data;
  const addressUtxosFetchState = yield select(selectAddressUtxosFetchState());
  const addressUtxos = addressUtxosFetchState.data;
  yield put(setFormValues(getDefaultFormValues(activeAddress, addressUtxos)));
}

function* callSubmitForm({ payload }) {
  //  TODO remove mnemonic from the equation, work with root/node only
  const mnemonic = yield getMnemonic();

  const amountCrypto = payload[AMOUNT_CRYPTO];
  const unitCrypto = payload[UNIT_CRYPTO];
  const amountToReceiver = convertCryptoFromUnitToUnit(
    amountCrypto,
    unitCrypto,
    SAT,
  );
  const addressTo = payload[ADDRESS_TO];

  const utxos = payload[ADDRESS_FROM_UTXOS];
  const availableUtxos = utxos.filter(utxo => utxo.enabled);

  const networkId = yield select(selectNetworkId());

  //
  // console.log(mnemonic);
  // console.log(utxos);
  // console.log(receiverAmount);
  // console.log(receiverAddress);
  // console.log(fee);
  // console.log(networkId);

  const tx = createTransactionFromMnemonic(
    mnemonic,
    availableUtxos,
    amountToReceiver,
    addressTo,
    3000,
    networkId,
  );

  return tx;
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
