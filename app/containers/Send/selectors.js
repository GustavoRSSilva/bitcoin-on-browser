import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { FORM_VALUES } from './constants';

/**
 * Direct selector to the send state domain
 */

const selectSendDomain = state => state.get('send', initialState);

/**
 * Other specific selectors
 */

const selectFormValues = () =>
  createSelector(selectSendDomain, subState => subState.get(FORM_VALUES));

/**
 * Default selector used by Send
 */

const makeSelectSend = () =>
  createSelector(selectSendDomain, substate => substate.toJS());

export default makeSelectSend;
export { selectSendDomain, selectFormValues };
