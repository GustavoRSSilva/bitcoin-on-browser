import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { PASSWORD, SUBMIT_FORM_STATE, FORM_ERROR_MESSAGE } from './constants';

/**
 * Direct selector to the logIn state domain
 */

const selectLogInDomain = state => state.get('logIn', initialState);

/**
 * Other specific selectors
 */

const selectPassword = () =>
  createSelector(selectLogInDomain, subState => subState.get(PASSWORD));

const selectSubmitFormState = () =>
  createSelector(selectLogInDomain, subState =>
    subState.get(SUBMIT_FORM_STATE),
  );

const selectErrorMessage = () =>
  createSelector(selectLogInDomain, subState =>
    subState.get(FORM_ERROR_MESSAGE),
  );

/**
 * Default selector used by LogIngit
 */

const makeSelectLogIn = () =>
  createSelector(selectLogInDomain, substate => substate.toJS());

export default makeSelectLogIn;
export {
  selectLogInDomain,
  selectPassword,
  selectSubmitFormState,
  selectErrorMessage,
};
