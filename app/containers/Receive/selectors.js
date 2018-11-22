import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { FORM_VALUES } from './constants';
/**
 * Direct selector to the receive state domain
 */

const selectReceiveDomain = state => state.get('receive', initialState);

/**
 * Other specific selectors
 */

const selectFormValues = () =>
  createSelector(selectReceiveDomain, subState => subState.get(FORM_VALUES));

/**
 * Default selector used by Receive
 */

const makeSelectReceive = () =>
  createSelector(selectReceiveDomain, substate => substate.toJS());

export default makeSelectReceive;
export { selectReceiveDomain, selectFormValues };
