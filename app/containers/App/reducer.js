/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';

import { DEFAULT_SELECTED_NETWORK } from 'utils/constants';

import {
  NETWORK_ID,
  FETCH_NETWORK_STATE,
  FETCH_NETWORK,
  FETCH_NETWORK_REJECTED,
  FETCH_NETWORK_SUCCESSFUL,
  CHANGE_NETWORK_STATE,
  CHANGE_NETWORK,
  CHANGE_NETWORK_REJECTED,
  CHANGE_NETWORK_SUCCESSFUL,
  USER_CREATED_STATE,
  FETCH_USER_CREATED,
  FETCH_USER_CREATED_REJECTED,
  FETCH_USER_CREATED_SUCCESSFUL,
  SESSION_VALID_STATE,
  FETCH_SESSION_VALID,
  FETCH_SESSION_VALID_REJECTED,
  FETCH_SESSION_VALID_SUCCESSFUL,
  ACTIVE_ADDRESS_FETCH_STATE,
  FETCH_ACTIVE_ADDRESS,
  FETCH_ACTIVE_ADDRESS_REJECTED,
  FETCH_ACTIVE_ADDRESS_SUCCESSFUL,
  SAVE_ADDRESS_STATE,
  SAVE_ADDRESS,
  SAVE_ADDRESS_REJECTED,
  SAVE_ADDRESS_SUCCESSFUL,
  ADDRESS_BALANCE_FETCH_STATE,
  FETCH_ADDRESS_BALANCE,
  FETCH_ADDRESS_BALANCE_REJECTED,
  FETCH_ADDRESS_BALANCE_SUCCESSFUL,
  BTC_TO_FIAT_FETCH_STATE,
  FETCH_BTC_TO_FIAT_VALUE,
  FETCH_BTC_TO_FIAT_VALUE_REJECTED,
  FETCH_BTC_TO_FIAT_VALUE_SUCCESSFUL,
  ADDRESS_TRANSACTIONS_FETCH_STATE,
  FETCH_ADDRESS_TRANSACTIONS,
  FETCH_ADDRESS_TRANSACTIONS_REJECTED,
  FETCH_ADDRESS_TRANSACTIONS_SUCCESSFUL,
} from './constants';

const setState = (requesting = false, error = null, data = null) => ({
  requesting,
  error,
  data,
});

export const initialState = fromJS({
  [USER_CREATED_STATE]: setState(),
  [SESSION_VALID_STATE]: setState(),
  [ACTIVE_ADDRESS_FETCH_STATE]: setState(),
  [SAVE_ADDRESS_STATE]: setState(),
  [ADDRESS_BALANCE_FETCH_STATE]: setState(),
  [BTC_TO_FIAT_FETCH_STATE]: setState(),
  [ADDRESS_TRANSACTIONS_FETCH_STATE]: setState(),
  [NETWORK_ID]: DEFAULT_SELECTED_NETWORK,
  [FETCH_NETWORK_STATE]: setState(),
  [CHANGE_NETWORK_STATE]: setState(),
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_NETWORK:
      return state.set(FETCH_NETWORK_STATE, setState(true));

    case FETCH_NETWORK_REJECTED:
      return state.set(FETCH_NETWORK_STATE, setState(false, true));

    case FETCH_NETWORK_SUCCESSFUL:
      return state
        .set(FETCH_NETWORK_STATE, setState(false, null, action.payload))
        .set(NETWORK_ID, action.payload);

    //  the change network has the probability of failure
    //  that is why we have CHANGE_NETWORK_STATE and NETWORK_ID
    case CHANGE_NETWORK:
      return state.set(CHANGE_NETWORK_STATE, setState(true));

    case CHANGE_NETWORK_REJECTED:
      return state.set(CHANGE_NETWORK_STATE, setState(false, action.payload));

    case CHANGE_NETWORK_SUCCESSFUL:
      return state
        .set(CHANGE_NETWORK_STATE, setState(false, null, action.payload))
        .set(NETWORK_ID, action.payload);

    case FETCH_USER_CREATED:
      return state.set(USER_CREATED_STATE, setState(true));

    case FETCH_USER_CREATED_REJECTED:
      return state.set(USER_CREATED_STATE, setState(false, true));

    case FETCH_USER_CREATED_SUCCESSFUL:
      return state.set(
        USER_CREATED_STATE,
        setState(false, null, action.payload),
      );

    case FETCH_SESSION_VALID:
      return state.set(SESSION_VALID_STATE, setState(true));

    case FETCH_SESSION_VALID_REJECTED:
      return state.set(SESSION_VALID_STATE, setState(false, null, false));

    case FETCH_SESSION_VALID_SUCCESSFUL:
      return state.set(
        SESSION_VALID_STATE,
        setState(false, null, action.payload),
      );

    case FETCH_ACTIVE_ADDRESS:
      return state.set(ACTIVE_ADDRESS_FETCH_STATE, setState(true));

    case FETCH_ACTIVE_ADDRESS_REJECTED:
      return state.set(ACTIVE_ADDRESS_FETCH_STATE, setState(false, true));

    case FETCH_ACTIVE_ADDRESS_SUCCESSFUL:
      return state.set(
        ACTIVE_ADDRESS_FETCH_STATE,
        setState(false, null, action.payload),
      );

    case SAVE_ADDRESS:
      return state.set(SAVE_ADDRESS_STATE, setState(true));

    case SAVE_ADDRESS_REJECTED:
      return state.set(SAVE_ADDRESS_STATE, setState(false, true));

    case SAVE_ADDRESS_SUCCESSFUL:
      return state.set(
        SAVE_ADDRESS_STATE,
        setState(false, null, action.payload),
      );

    //    Fetch address balance
    case FETCH_ADDRESS_BALANCE:
      return state.set(ADDRESS_BALANCE_FETCH_STATE, setState(true));

    case FETCH_ADDRESS_BALANCE_REJECTED:
      return state.set(ADDRESS_BALANCE_FETCH_STATE, setState(false, true));

    case FETCH_ADDRESS_BALANCE_SUCCESSFUL:
      return state.set(
        ADDRESS_BALANCE_FETCH_STATE,
        setState(false, null, action.payload),
      );

    //    Fetch btc to fiat price
    case FETCH_BTC_TO_FIAT_VALUE:
      return state.set(BTC_TO_FIAT_FETCH_STATE, setState(true));

    case FETCH_BTC_TO_FIAT_VALUE_REJECTED:
      return state.set(BTC_TO_FIAT_FETCH_STATE, setState(false, true));

    case FETCH_BTC_TO_FIAT_VALUE_SUCCESSFUL:
      return state.set(
        BTC_TO_FIAT_FETCH_STATE,
        setState(false, null, action.payload),
      );

    //    Fetch address transactions
    case FETCH_ADDRESS_TRANSACTIONS:
      return state.set(ADDRESS_TRANSACTIONS_FETCH_STATE, setState(true));

    case FETCH_ADDRESS_TRANSACTIONS_REJECTED:
      return state.set(ADDRESS_TRANSACTIONS_FETCH_STATE, setState(false, true));

    case FETCH_ADDRESS_TRANSACTIONS_SUCCESSFUL:
      return state.set(
        ADDRESS_TRANSACTIONS_FETCH_STATE,
        setState(false, null, action.payload),
      );

    default:
      return state;
  }
}

export default appReducer;
