import { createSelector } from 'reselect';
import { initialState } from './reducer';
import {
  NETWORK_ID,
  SESSION_VALID_STATE,
  USER_CREATED_STATE,
  ACTIVE_ADDRESS_FETCH_STATE,
  SAVE_ADDRESS_STATE,
  ADDRESS_BALANCE_FETCH_STATE,
  BTC_TO_FIAT_FETCH_STATE,
  ADDRESS_TRANSACTIONS_FETCH_STATE,
  ADDRESS_UXTOS,
} from './constants';

/**
 * Direct selector to the app state domain
 */

const selectAppDomain = state => state.get('app', initialState);

/**
 * Other specific selectors
 */

const selectNetworkId = () =>
  createSelector(selectAppDomain, subState => subState.get(NETWORK_ID));

const selectUserCreatedState = () =>
  createSelector(selectAppDomain, subState => subState.get(USER_CREATED_STATE));

const selectSessionValidState = () =>
  createSelector(selectAppDomain, subState =>
    subState.get(SESSION_VALID_STATE),
  );

const selectActiveAddressFetchState = () =>
  createSelector(selectAppDomain, subState =>
    subState.get(ACTIVE_ADDRESS_FETCH_STATE),
  );

const selectSaveAddressState = () =>
  createSelector(selectAppDomain, subState => subState.get(SAVE_ADDRESS_STATE));

const selectAddressBalanceFetchState = () =>
  createSelector(selectAppDomain, subState =>
    subState.get(ADDRESS_BALANCE_FETCH_STATE),
  );

const selectBtcToFiatFetchState = () =>
  createSelector(selectAppDomain, subState =>
    subState.get(BTC_TO_FIAT_FETCH_STATE),
  );

const selectAddressTransactionsFetchState = () =>
  createSelector(selectAppDomain, subState =>
    subState.get(ADDRESS_TRANSACTIONS_FETCH_STATE),
  );

const selectAddressUtxos = () =>
  createSelector(selectAppDomain, subState => subState.get(ADDRESS_UXTOS));
/**
 * Default selector used by App
 */

const makeSelectApp = () =>
  createSelector(selectAppDomain, substate => substate.toJS());

export default makeSelectApp;
export {
  selectNetworkId,
  selectAppDomain,
  selectSessionValidState,
  selectUserCreatedState,
  selectActiveAddressFetchState,
  selectSaveAddressState,
  selectAddressBalanceFetchState,
  selectBtcToFiatFetchState,
  selectAddressTransactionsFetchState,
  selectAddressUtxos,
};
