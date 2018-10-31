import { takeLatest, call, put } from 'redux-saga/effects';

import { validateSession } from 'containers/App/saga';

import { SUBMIT_FORM } from './constants';
import { submitFormRejected, submitFormSuccessful } from './actions';

// Workers sagas

// Watcher sagas

function* callSubmitForm(action) {
  try {
    const validSession = yield call(validateSession, action.payload);
    yield put(submitFormSuccessful(validSession));
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
