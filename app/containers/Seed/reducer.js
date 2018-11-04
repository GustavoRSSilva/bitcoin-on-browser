/*
 *
 * Seed reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SEED,
  GENERATE_NEW_SEED,
  SET_SEED,
  SAVE_SEED_STATE,
  SAVE_SEED,
  SAVE_SEED_REJECTED,
  SAVE_SEED_SUCCESSFUL,
} from './constants';

const setState = (requesting = false, error = null, data = null) => ({
  requesting,
  error,
  data,
});

export const initialState = fromJS({
  [SEED]: '',
  [SAVE_SEED_STATE]: setState(),
});

function seedReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_NEW_SEED:
      return state.set(SEED, '');

    case SET_SEED:
      return state.set(SEED, action.payload);

    case SAVE_SEED:
      return state.set(SAVE_SEED_STATE, setState(true));

    case SAVE_SEED_REJECTED:
      return state.set(SAVE_SEED_STATE, setState(false, action.payload));

    case SAVE_SEED_SUCCESSFUL:
      return state.set(SAVE_SEED_STATE, setState(false, null, action.payload));

    default:
      return state;
  }
}

export default seedReducer;
