/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { PASSWORD, SET_PASSWORD } from './constants';

export const initialState = fromJS({
  [PASSWORD]: '',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PASSWORD:
      return state.setState(PASSWORD, action.payload);

    default:
      return state;
  }
}

export default loginReducer;
