/*
 *
 * Seed reducer
 *
 */

import { fromJS } from 'immutable';
import { SEED, GENERATE_NEW_SEED, SET_SEED } from './constants';

export const initialState = fromJS({
  SEED: '',
});

function seedReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_NEW_SEED:
      return state.set(SEED, '');

    case SET_SEED:
      return state.set(SEED, action.payload);

    default:
      return state;
  }
}

export default seedReducer;
