/*
 *
 * SignUp reducer
 *
 */

import { fromJS } from 'immutable';
import {
  PASSWORD,
  CONFIRM_PASSWORD,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SUBMIT_FORM_STATE,
  SUBMIT_FORM,
  SUBMIT_FORM_REJECTED,
  SUBMIT_FORM_SUCCESSFUL,
  FORM_ERROR_MESSAGE,
  SET_ERROR_MESSAGE,
} from 'containers/SignUp/constants';

const setState = (requesting = false, error = null, data = null) => ({
  requesting,
  error,
  data,
});

export const initialState = fromJS({
  [PASSWORD]: '',
  [CONFIRM_PASSWORD]: '',
  [SUBMIT_FORM_STATE]: setState(),
  [FORM_ERROR_MESSAGE]: null,
});

function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PASSWORD:
      return state.set(PASSWORD, action.payload);

    case SET_CONFIRM_PASSWORD:
      return state.set(CONFIRM_PASSWORD, action.payload);

    case SUBMIT_FORM:
      return state.set(SUBMIT_FORM_STATE, setState(true));

    case SUBMIT_FORM_REJECTED:
      return state.set(SUBMIT_FORM_STATE, setState(false, action.payload));

    case SUBMIT_FORM_SUCCESSFUL:
      return state.set(SUBMIT_FORM_STATE, setState(false, null, 'success'));

    case SET_ERROR_MESSAGE:
      return state.set(FORM_ERROR_MESSAGE, action.payload);

    default:
      return state;
  }
}

export default signUpReducer;
