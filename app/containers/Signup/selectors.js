import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { PASSWORD, CONFIRM_PASSWORD } from './constants';

/**
 * Direct selector to the signUp state domain
 */

const selectSignUpDomain = state => state.get('signUp', initialState);

/**
 * Other specific selectors
 */

const selectPassword = () =>
  createSelector(selectSignUpDomain, subState => subState.get(PASSWORD));

const selectConfirmPassword = () =>
  createSelector(selectSignUpDomain, subState =>
    subState.get(CONFIRM_PASSWORD),
  );

/**
 * Default selector used by SignUp
 */

const makeSelectSignUp = () =>
  createSelector(selectSignUpDomain, substate => substate.toJS());

export default makeSelectSignUp;
export { selectSignUpDomain, selectPassword, selectConfirmPassword };
