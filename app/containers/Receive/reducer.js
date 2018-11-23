/*
 *
 * Receive reducer
 *
 */

import { fromJS } from 'immutable';

import { BTC, USD } from 'utils/constants';

import {
  FORM_VALUES,
  AMOUNT_CRYPTO,
  UNIT_CRYPTO,
  AMOUNT_FIAT,
  UNIT_FIAT,
  SET_FORM_VALUES,
  RESET_FORM_VALUES,
} from './constants';

const setDefaultFormValues = () => ({
  [AMOUNT_CRYPTO]: '0',
  [UNIT_CRYPTO]: BTC,
  [AMOUNT_FIAT]: '0',
  [UNIT_FIAT]: USD,
});

export const initialState = fromJS({
  [FORM_VALUES]: { ...setDefaultFormValues() },
});

function receiveReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_VALUES:
      return state.set(FORM_VALUES, { ...action.payload });

    case RESET_FORM_VALUES:
      return state.set(FORM_VALUES, setDefaultFormValues());

    default:
      return state;
  }
}

export default receiveReducer;
