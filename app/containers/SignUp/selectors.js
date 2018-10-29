import { createSelector } from 'reselect';
import { initialState } from './reducer';
import {
  PASSWORD,
  CONFIRM_PASSWORD,
  SUBMIT_FORM_STATE,
  FORM_ERROR_MESSAGE,
} from './constants';

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

const selectSubmitFormState = () =>
  createSelector(selectSignUpDomain, subState =>
    subState.get(SUBMIT_FORM_STATE),
  );

const selectErrorMessage = () =>
  createSelector(selectSignUpDomain, subState =>
    subState.get(FORM_ERROR_MESSAGE),
  );

/**
 * Default selector used by SignUp
 */

const makeSelectSignUp = () =>
  createSelector(selectSignUpDomain, substate => substate.toJS());

export default makeSelectSignUp;
export {
  selectSignUpDomain,
  selectPassword,
  selectConfirmPassword,
  selectSubmitFormState,
  selectErrorMessage,
};
