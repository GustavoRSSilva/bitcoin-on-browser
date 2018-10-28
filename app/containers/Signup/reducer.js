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
} from 'containers/SignUp/constants';

export const initialState = fromJS({
  [PASSWORD]: '',
  [CONFIRM_PASSWORD]: '',
});

function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PASSWORD:
      return state.set(PASSWORD, action.payload);

    case SET_CONFIRM_PASSWORD:
      return state.set(CONFIRM_PASSWORD, action.payload);

    default:
      return state;
  }
}

export default signUpReducer;
