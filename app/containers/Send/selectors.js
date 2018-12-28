import { createSelector } from 'reselect';
import { initialState } from './reducer';
import {
  FORM_VALUES,
  SUBMIT_FORM_STATE,
  AVAILABLE_AMOUNT_SATOSHIS,
} from './constants';

/**
 * Direct selector to the send state domain
 */

const selectSendDomain = state => state.get('send', initialState);

/**
 * Other specific selectors
 */

const selectFormValues = () =>
  createSelector(selectSendDomain, subState => subState.get(FORM_VALUES));

const selectSubmitFormState = () =>
  createSelector(selectSendDomain, subState => subState.get(SUBMIT_FORM_STATE));

const selectAvailableAmountSatoshis = () =>
  createSelector(selectSendDomain, subState =>
    subState.get(AVAILABLE_AMOUNT_SATOSHIS),
  );

/**
 * Default selector used by Send
 */

const makeSelectSend = () =>
  createSelector(selectSendDomain, substate => substate.toJS());

export default makeSelectSend;
export {
  selectSendDomain,
  selectFormValues,
  selectSubmitFormState,
  selectAvailableAmountSatoshis,
};
