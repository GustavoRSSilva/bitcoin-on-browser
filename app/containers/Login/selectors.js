import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { PASSWORD } from './constants';

/**
 * Direct selector to the logIn state domain
 */

const selectLogInDomain = state => state.get('logIn', initialState);

/**
 * Other specific selectors
 */

const selectPassword = () =>
  createSelector(selectLogInDomain, subState => subState.get(PASSWORD));

/**
 * Default selector used by LogIn
 */

const makeSelectLogIn = () =>
  createSelector(selectLogInDomain, substate => substate.toJS());

export default makeSelectLogIn;
export { selectLogInDomain, selectPassword };
