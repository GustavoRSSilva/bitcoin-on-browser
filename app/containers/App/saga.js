import { takeLatest, call, put } from 'redux-saga/effects';
import { saveItem, getItem } from 'utils/storage';
import CryptoJS from 'crypto-js';
import { sha256 } from 'utils/bitcoin';
import {
  SESSION,
  USER,
  FETCH_USER_CREATED,
  FETCH_SESSION_VALID,
} from './constants';

import {
  fetchUserCreatedRejected,
  fetchUserCreatedSuccessful,
  fetchSessionValidRejected,
  fetchSessionValidSuccessful,
} from './actions';

const SECRET = process.env.SECRET || 'secret_key';

export const setSession = bool => {
  saveItem(SESSION, bool);
};

export const stringToSha256 = string => sha256(string);

export function saveUser(user) {
  //  encrypt the user data
  const encryptData = CryptoJS.AES.encrypt(
    JSON.stringify(user),
    SECRET,
  ).toString();
  saveItem(USER, encryptData);
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
    yield put(fetchUserCreatedSuccessful(user));
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

function* fetchUserCreatedSaga() {
  yield takeLatest(FETCH_USER_CREATED, callGetUserCreated);
}

function* fetchSessionValidSaga() {
  yield takeLatest(FETCH_SESSION_VALID, callGetSessionValid);
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [fetchUserCreatedSaga(), fetchSessionValidSaga()];
}
