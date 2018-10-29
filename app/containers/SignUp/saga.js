import { takeLatest, call, put } from 'redux-saga/effects';

import { setUserPassword } from 'utils/user';
import { SUBMIT_FORM } from './constants';
import { submitFormRejected, submitFormSuccessful } from './actions';

// Workers sagas
function savePassword(password) {
  return setUserPassword(password);
}

// Watcher sagas

function* callSubmitForm(action) {
  try {
    yield call(savePassword, action.payload);
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
