/*
 *
 * LogIn reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PASSWORD,
  SET_PASSWORD,
  SUBMIT_FORM_STATE,
  SUBMIT_FORM,
  SUBMIT_FORM_REJECTED,
  SUBMIT_FORM_SUCCESSFUL,
  RESET_SUBMIT_FORM,
  FORM_ERROR_MESSAGE,
  SET_ERROR_MESSAGE,
} from 'containers/LogIn/constants';

const setState = (requesting = false, error = null, data = null) => ({
  requesting,
  error,
  data,
});

export const initialState = fromJS({
  [PASSWORD]: '',
  [SUBMIT_FORM_STATE]: setState(),
  [FORM_ERROR_MESSAGE]: null,
});

function logInReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PASSWORD:
      return state.set(PASSWORD, action.payload);

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

    case SET_ERROR_MESSAGE:
      return state.set(FORM_ERROR_MESSAGE, action.payload);

    default:
      return state;
  }
}

export default logInReducer;
