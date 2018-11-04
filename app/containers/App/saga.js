import { takeLatest, call, put } from 'redux-saga/effects';
import { saveItem, getItem } from 'utils/storage';
import CryptoJS from 'crypto-js';
import { sha256 } from 'utils/bitcoin';

import {
  SESSION,
  USER,
  PASSWORD,
  SEED,
  FETCH_USER_CREATED,
  FETCH_SESSION_VALID,
  FETCH_SEED_CREATED,
} from './constants';

import {
  fetchUserCreatedRejected,
  fetchUserCreatedSuccessful,
  fetchSessionValidRejected,
  fetchSessionValidSuccessful,
} from './actions';
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

export function* setSession(bool) {
  yield saveItem(SESSION, bool);
}

export const stringToSha256 = string => sha256(string);

export function* saveUser(user) {
  //  encrypt the user data
  const encryptData = CryptoJS.AES.encrypt(
    JSON.stringify(user),
    SECRET,
  ).toString();
  yield saveItem(USER, encryptData);
  return user;
}

export function* saveSeed(seed) {
  const user = yield getUser();
  user[SEED] = btoa(seed);
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

export function* getSeed() {
  const user = yield getUser();
  return atob(user[SEED]);
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

function* callGetSeedCreated() {
  try {
    const seed = yield call(getSeed);
    const boolIsCreated = !!seed;
    yield put(fetchUserCreatedSuccessful(boolIsCreated));
  } catch (e) {
    yield put(fetchUserCreatedRejected());
  }
}

function* fetchUserCreatedSaga() {
  yield takeLatest(FETCH_USER_CREATED, callGetUserCreated);
}

function* fetchSessionValidSaga() {
  yield takeLatest(FETCH_SESSION_VALID, callGetSessionValid);
}

function* fetchSeedCreatedSaga() {
  yield takeLatest(FETCH_SEED_CREATED, callGetSeedCreated);
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [
    fetchUserCreatedSaga(),
    fetchSessionValidSaga(),
    fetchSeedCreatedSaga(),
  ];
}
