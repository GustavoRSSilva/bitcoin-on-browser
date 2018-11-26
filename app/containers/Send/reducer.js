/*
 *
 * Send reducer
 *
 */

import { fromJS } from 'immutable';

import { FORM_VALUES, SET_FORM_VALUES } from './constants';
import { getDefaultFormValues } from './saga';

export const initialState = fromJS({
  [FORM_VALUES]: { ...getDefaultFormValues() },
});

function sendReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_VALUES:
      return state.set(FORM_VALUES, {
        ...action.payload,
      });

    default:
      return state;
  }
}

export default sendReducer;
