/*
 *
 * Send reducer
 *
 */

import { fromJS } from 'immutable';

import {
  FORM_VALUES,
  SET_FORM_VALUES,
  SUBMIT_FORM_STATE,
  SUBMIT_FORM,
  SUBMIT_FORM_REJECTED,
  SUBMIT_FORM_SUCCESSFUL,
  RESET_SUBMIT_FORM,
  AVAILABLE_AMOUNT_SATOSHIS,
  SET_AVAIALABLE_AMOUNT_SATOSHIS,
} from './constants';
import { getDefaultFormValues } from './saga';

const setState = (requesting = false, error = null, data = null) => ({
  requesting,
  error,
  data,
});

export const initialState = fromJS({
  [FORM_VALUES]: { ...getDefaultFormValues() },
  [SUBMIT_FORM_STATE]: setState(),
  [AVAILABLE_AMOUNT_SATOSHIS]: 0,
});

function sendReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_VALUES:
      return state.set(FORM_VALUES, {
        ...action.payload,
      });

    case SUBMIT_FORM:
      return state.set(SUBMIT_FORM_STATE, setState(true));

    case SUBMIT_FORM_REJECTED:
      return state.set(SUBMIT_FORM_STATE, setState(false, action.payload));

    case SUBMIT_FORM_SUCCESSFUL:
      return state.set(
        SUBMIT_FORM_STATE,
        setState(false, null, action.payload),
      );

    case RESET_SUBMIT_FORM:
      return state.set(SUBMIT_FORM_STATE, setState());

    case SET_AVAIALABLE_AMOUNT_SATOSHIS:
      return state.set(AVAILABLE_AMOUNT_SATOSHIS, action.payload);

    default:
      return state;
  }
}

export default sendReducer;
