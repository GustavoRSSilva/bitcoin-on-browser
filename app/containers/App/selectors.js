import { createSelector } from 'reselect';
import { initialState } from './reducer';
import {
  SESSION_VALID_STATE,
  USER_CREATED_STATE,
  MNEMONIC_CREATED_STATE,
  SAVE_ADDRESS_STATE,
} from './constants';

/**
 * Direct selector to the app state domain
 */

const selectAppDomain = state => state.get('app', initialState);

/**
 * Other specific selectors
 */

const selectUserCreatedState = () =>
  createSelector(selectAppDomain, subState => subState.get(USER_CREATED_STATE));

const selectSessionValidState = () =>
  createSelector(selectAppDomain, subState =>
    subState.get(SESSION_VALID_STATE),
  );

const selectMnemonicCreatedState = () =>
  createSelector(selectAppDomain, subState =>
    subState.get(MNEMONIC_CREATED_STATE),
  );

const selectsaveAddressState = () =>
  createSelector(selectAppDomain, subState => subState.get(SAVE_ADDRESS_STATE));
/**
 * Default selector used by App
 */

const makeSelectApp = () =>
  createSelector(selectAppDomain, substate => substate.toJS());

export default makeSelectApp;
export {
  selectAppDomain,
  selectSessionValidState,
  selectUserCreatedState,
  selectMnemonicCreatedState,
  selectsaveAddressState,
};
