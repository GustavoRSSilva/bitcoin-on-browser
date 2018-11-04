import { takeLatest, call, put } from 'redux-saga/effects';

import {
  setSession,
  getUser,
  saveUser,
  stringToSha256,
} from 'containers/App/saga';
import { PASSWORD } from 'containers/App/constants';

import { fetchUserCreated, fetchSessionValid } from 'containers/App/actions';

import { SUBMIT_FORM } from './constants';
import { submitFormRejected, submitFormSuccessful } from './actions';

// Workers sagas
function* savePassword(password) {
  try {
    let user = yield getUser();

    if (!user) {
      user = {};
    }
    user[PASSWORD] = stringToSha256(password);
    yield saveUser(user);
    return true;
  } catch (e) {
    throw e;
  }
}

// Watcher sagas

function* callSubmitForm(action) {
  try {
    //  returns true if success
    const result = yield call(savePassword, action.payload);
    //  we need to set the user created to true
    yield put(fetchUserCreated());

    //  set the session as valid if success
    yield setSession(result);
    // update the session value
    yield put(fetchSessionValid());

    yield put(submitFormSuccessful());
  } catch (e) {
    yield put(submitFormRejected('something went wrong'));
  }
}

function* submitFormSaga() {
  yield takeLatest(SUBMIT_FORM, callSubmitForm);
}

// Root sagas
export default function* defaultSaga() {
  yield [submitFormSaga()];
}
