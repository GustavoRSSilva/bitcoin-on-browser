import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { PASSWORD } from './constants';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.get('login', initialState);

/**
 * Other specific selectors
 */

const selectPassword = () =>
  createSelector(selectLoginDomain, subState => subState.get(PASSWORD));

/**
 * Default selector used by Login
 */

const makeSelectLogin = () =>
  createSelector(selectLoginDomain, substate => substate.toJS());

export default makeSelectLogin;
export { selectLoginDomain, selectPassword };
