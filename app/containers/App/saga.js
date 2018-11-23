import { takeLatest, call, put, select } from 'redux-saga/effects';
import { saveItem, getItem } from 'utils/storage';
import CryptoJS from 'crypto-js';
import axios from 'axios';

import { COINDESK_CURRENT_PRICE_URL } from 'utils/constants';
import { sha256, getAddressFromMnemonic } from 'utils/bitcoin';
import {
  getAddressBalance,
  getAddressTransactions,
} from 'utils/blockstreamAPI';

import {
  SESSION,
  USER,
  PASSWORD,
  MNEMONIC,
  ACTIVE_ADDRESS,
  USER_ADDRESSES,
  FETCH_USER_CREATED,
  FETCH_SESSION_VALID,
  FETCH_ACTIVE_ADDRESS,
  SAVE_ADDRESS,
  FETCH_ADDRESS_BALANCE,
  FETCH_BTC_TO_FIAT_VALUE,
  FETCH_ADDRESS_TRANSACTIONS,
  CHANGE_NETWORK,
} from './constants';

import {
  fetchUserCreatedRejected,
  fetchUserCreatedSuccessful,
  fetchSessionValidRejected,
  fetchSessionValidSuccessful,
  fetchActiveAddress,
  fetchActiveAddressRejected,
  fetchActiveAddressSuccessful,
  saveAddressRejected,
  saveAddressSuccessful,
  fetchAddressBalance,
  fetchAddressBalanceRejected,
  fetchAddressBalanceSuccessful,
  fetchBtcToFiatValue,
  fetchBtcToFiatValueRejected,
  fetchBtcToFiatValueSuccessful,
  fetchAddressTransactions,
  fetchAddressTransactionsRejected,
  fetchAddressTransactionsSuccessful,
  changeNetworkRejected,
  changeNetworkSuccessful,
} from './actions';

import { selectNetworkId } from './selectors';

const { Buffer } = require('buffer/');

const SECRET = process.env.SECRET || 'secret_key';

const compareUint8Array = (buf1, buf2) => {
  if (buf1.length !== buf2.length) return false;
  for (let i = 0; i < buf1.length; i += 1) {
    if (buf1[i] !== buf2[i]) {
      return false;
    }
  }

  return true;
};

export const stringToSha256 = string => sha256(string);

export const getBtcToFiatValue = () =>
  axios.get(`${COINDESK_CURRENT_PRICE_URL}`);

export function* setSession(bool) {
  yield saveItem(SESSION, bool);
}

export function* saveUser(user) {
  //  encrypt the user data
  const encryptData = CryptoJS.AES.encrypt(
    JSON.stringify(user),
    SECRET,
  ).toString();
  yield saveItem(USER, encryptData);
  return user;
}

export function* saveMnemonic(mnemonic) {
  const user = yield getUser();
  user[MNEMONIC] = btoa(mnemonic);
  return yield saveUser(user);
}

function* storeAddress(address) {
  const user = yield getUser();
  const selectedNetwork = yield select(selectNetworkId());
  //    add teh address as the active address
  user[ACTIVE_ADDRESS] = address;
  user[selectedNetwork] = user[selectedNetwork] || [];
  const userAddresses = user[selectedNetwork][USER_ADDRESSES] || [];
  user[selectedNetwork][USER_ADDRESSES] = [...userAddresses, address];
  return yield saveUser(user);
}

export function* getUser() {
  try {
    const ciphertext = yield getItem(USER);

    if (!ciphertext) {
      return null;
    }

    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (e) {
    //  If there is no user, return null
    return null;
  }
}

export function* getMnemonic() {
  try {
    const user = yield getUser();
    return atob(user[MNEMONIC]);
  } catch (e) {
    return null;
  }
}

export function* getUserActiveAddress() {
  try {
    const user = yield getUser();
    return user[ACTIVE_ADDRESS];
  } catch (e) {
    return false;
  }
}

export function* validateSession(password) {
  const sha256Pass = stringToSha256(password);
  const user = yield getUser();
  const userPass = Buffer.from(user[PASSWORD].data);
  return compareUint8Array(userPass, sha256Pass);
}

export function* getSession() {
  try {
    const session = yield getItem(SESSION);
    return session;
  } catch (e) {
    //  If there is no session, return false
    return false;
  }
}

function* callGetUserCreated() {
  try {
    const user = yield call(getUser);
    const boolIsCreated = !!user;
    yield put(fetchUserCreatedSuccessful(boolIsCreated));
  } catch (e) {
    yield put(fetchUserCreatedRejected());
  }
}

function* callGetSessionValid() {
  try {
    const session = yield call(getSession);
    // We need to conver the session to a bool
    const boolSession = !!(session === true || session === 'true');
    yield put(fetchSessionValidSuccessful(boolSession));
  } catch (e) {
    yield put(fetchSessionValidRejected());
  }
}

function* callGetActiveAddress() {
  try {
    const address = yield call(getUserActiveAddress);
    if (address) {
      yield put(fetchAddressBalance(address));
      yield put(fetchAddressTransactions(address));
      yield put(fetchActiveAddressSuccessful(address));
    } else {
      yield put(fetchActiveAddressRejected());
    }
  } catch (e) {
    yield put(fetchActiveAddressRejected());
  }
}

function* callSaveAddress(action) {
  try {
    const result = yield call(storeAddress, action.payload);
    yield put(saveAddressSuccessful(result));
  } catch (e) {
    yield put(saveAddressRejected());
  }
}

function* callGetAddressBalance(action) {
  try {
    const selectedNetwork = yield select(selectNetworkId());
    const result = yield call(
      getAddressBalance,
      action.payload,
      selectedNetwork,
    );
    yield put(fetchBtcToFiatValue());
    yield put(fetchAddressBalanceSuccessful(result.data));
  } catch (e) {
    yield put(fetchAddressBalanceRejected());
  }
}

function* callGetBtcToFiatValue() {
  try {
    const result = yield call(getBtcToFiatValue);
    yield put(fetchBtcToFiatValueSuccessful(result.data));
  } catch (e) {
    yield put(fetchBtcToFiatValueRejected());
  }
}

function* callGetaddressTransactions(action) {
  try {
    const selectedNetwork = yield select(selectNetworkId());
    const result = yield call(
      getAddressTransactions,
      action.payload,
      selectedNetwork,
    );
    yield put(fetchAddressTransactionsSuccessful(result.data));
  } catch (e) {
    yield put(fetchAddressTransactionsRejected());
  }
}

function* callChangeNetwork(action) {
  try {
    const newNetwork = action.payload;
    const selectedNetwork = yield select(selectNetworkId());
    if (newNetwork !== selectedNetwork) {
      yield put(changeNetworkSuccessful(newNetwork));
      //  After changing the network, creating the new Address and fetch the active address values
      const mnemonic = yield getMnemonic();
      const address = getAddressFromMnemonic(mnemonic, 0, newNetwork);
      yield call(storeAddress, address);
      yield put(fetchActiveAddress());
    }
  } catch (e) {
    yield put(changeNetworkRejected());
  }
}

function* fetchUserCreatedSaga() {
  yield takeLatest(FETCH_USER_CREATED, callGetUserCreated);
}

function* fetchSessionValidSaga() {
  yield takeLatest(FETCH_SESSION_VALID, callGetSessionValid);
}

function* fetchActiveAddressSaga() {
  yield takeLatest(FETCH_ACTIVE_ADDRESS, callGetActiveAddress);
}

function* saveAddressSaga() {
  yield takeLatest(SAVE_ADDRESS, callSaveAddress);
}

function* fetchAddressBalanceSaga() {
  yield takeLatest(FETCH_ADDRESS_BALANCE, callGetAddressBalance);
}

function* fetchBtcToFiatValueSaga() {
  yield takeLatest(FETCH_BTC_TO_FIAT_VALUE, callGetBtcToFiatValue);
}

function* fetchAddressTransactionsSaga() {
  yield takeLatest(FETCH_ADDRESS_TRANSACTIONS, callGetaddressTransactions);
}

function* changeNetworkSaga() {
  yield takeLatest(CHANGE_NETWORK, callChangeNetwork);
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    fetchUserCreatedSaga(),
    fetchSessionValidSaga(),
    fetchActiveAddressSaga(),
    saveAddressSaga(),
    fetchAddressBalanceSaga(),
    fetchBtcToFiatValueSaga(),
    fetchAddressTransactionsSaga(),
    changeNetworkSaga(),
  ];
}
