import { takeLatest, call, put } from 'redux-saga/effects';

import { validateSession, setSession } from 'containers/App/saga';
import { fetchSessionValid } from 'containers/App/actions';

import { SUBMIT_FORM } from './constants';
import { submitFormRejected, submitFormSuccessful } from './actions';

// Workers sagas

// Watcher sagas

function* callSubmitForm(action) {
  try {
    const validSession = yield call(validateSession, action.payload);
    //  set the session as valid
    yield setSession(validSession);
    yield put(submitFormSuccessful(validSession));
    // update the session value
    yield put(fetchSessionValid());
  } catch (e) {
    yield put(submitFormRejected('something went wrong'));
  }
}

function* submitLoginFormSaga() {
  yield takeLatest(SUBMIT_FORM, callSubmitForm);
}

// Root sagas
export default function* defaultSaga() {
  yield [submitLoginFormSaga()];
}
