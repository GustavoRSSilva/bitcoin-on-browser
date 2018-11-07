/*
 *
 * Mnemonic reducer
 *
 */

import { fromJS } from 'immutable';
import {
  MNEMONIC,
  GENERATE_NEW_MNEMONIC,
  SET_MNEMONIC,
  SAVE_MNEMONIC_STATE,
  SAVE_MNEMONIC,
  SAVE_MNEMONIC_REJECTED,
  SAVE_MNEMONIC_SUCCESSFUL,
} from './constants';

const setState = (requesting = false, error = null, data = null) => ({
  requesting,
  error,
  data,
});

export const initialState = fromJS({
  [MNEMONIC]: '',
  [SAVE_MNEMONIC_STATE]: setState(),
});

function mnemonicReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_NEW_MNEMONIC:
      return state.set(MNEMONIC, '');

    case SET_MNEMONIC:
      return state.set(MNEMONIC, action.payload);

    case SAVE_MNEMONIC:
      return state.set(SAVE_MNEMONIC_STATE, setState(true));

    case SAVE_MNEMONIC_REJECTED:
      return state.set(SAVE_MNEMONIC_STATE, setState(false, action.payload));

    case SAVE_MNEMONIC_SUCCESSFUL:
      return state.set(
        SAVE_MNEMONIC_STATE,
        setState(false, null, action.payload),
      );

    default:
      return state;
  }
}

export default mnemonicReducer;
