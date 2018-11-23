import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the send state domain
 */

const selectSendDomain = state => state.get('send', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Send
 */

const makeSelectSend = () =>
  createSelector(selectSendDomain, substate => substate.toJS());

export default makeSelectSend;
export { selectSendDomain };
