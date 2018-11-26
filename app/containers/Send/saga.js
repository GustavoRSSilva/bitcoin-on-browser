import { takeLatest, put, select } from 'redux-saga/effects';
import { selectActiveAddressFetchState } from 'containers/App/selectors';

import { BTC, USD } from 'utils/constants';

import {
  AMOUNT_CRYPTO,
  UNIT_CRYPTO,
  AMOUNT_FIAT,
  UNIT_FIAT,
  ADDRESS_TO,
  ADDRESS_FROM,
  RESET_FORM_VALUES,
} from './constants';
import { setFormValues } from './actions';

export const getDefaultFormValues = (activeAddress = null) => ({
  [AMOUNT_CRYPTO]: '0',
  [UNIT_CRYPTO]: BTC,
  [AMOUNT_FIAT]: '0',
  [UNIT_FIAT]: USD,
  [ADDRESS_TO]: '',
  [ADDRESS_FROM]: activeAddress || '',
});

// Watcher sagas
function* callResetFormValues() {
  const activeAddressFetchState = yield select(selectActiveAddressFetchState());
  const activeAddress = activeAddressFetchState.data;
  yield put(setFormValues(getDefaultFormValues(activeAddress)));
}

function* resetFormValuesSaga() {
  yield takeLatest(RESET_FORM_VALUES, callResetFormValues);
}

// Individual exports for testing
export default function* defaultSaga() {
  yield [resetFormValuesSaga()];
}
