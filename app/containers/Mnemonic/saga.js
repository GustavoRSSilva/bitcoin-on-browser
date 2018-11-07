import { takeLatest, call, put } from 'redux-saga/effects';

import { generateMnemonic, getAddressFromMnemonic } from 'utils/bitcoin';

import { saveMnemonic, getMnemonic } from 'containers/App/saga';
import { fetchMnemonicCreated, saveAddress } from 'containers/App/actions';

import { GENERATE_NEW_MNEMONIC, SAVE_MNEMONIC } from './constants';
import {
  setMnemonic,
  saveMnemonicRejected,
  saveMnemonicSuccessful,
} from './actions';

// Watcher sagas

function* callGenerateMnemonic() {
  const mnemonic = generateMnemonic();
  yield put(setMnemonic(mnemonic));
}

function* callSaveMnemonic(action) {
  try {
    yield call(saveMnemonic, action.payload);
    const mnemonic = yield getMnemonic();
    const address = getAddressFromMnemonic(mnemonic);
    yield put(saveAddress(address));

    yield put(fetchMnemonicCreated());

    yield put(saveMnemonicSuccessful(!!mnemonic));
  } catch (e) {
    yield put(saveMnemonicRejected());
  }
}

function* generateMnemonicSaga() {
  yield takeLatest(GENERATE_NEW_MNEMONIC, callGenerateMnemonic);
}

function* saveMnemonicSaga() {
  yield takeLatest(SAVE_MNEMONIC, callSaveMnemonic);
}

// Root sagas
export default function* defaultSaga() {
  yield [generateMnemonicSaga(), saveMnemonicSaga()];
}
