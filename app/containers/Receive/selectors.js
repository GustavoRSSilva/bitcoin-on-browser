import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the receive state domain
 */

const selectReceiveDomain = state => state.get('receive', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Receive
 */

const makeSelectReceive = () =>
  createSelector(selectReceiveDomain, substate => substate.toJS());

export default makeSelectReceive;
export { selectReceiveDomain };
