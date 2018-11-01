import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { SEED } from './constants';
/**
 * Direct selector to the seed state domain
 */

const selectSeedDomain = state => state.get('seed', initialState);

/**
 * Other specific selectors
 */

const makeSelectSeedString = () =>
  createSelector(selectSeedDomain, subState => subState.get(SEED));

/**
 * Default selector used by Seed
 */

const makeSelectSeed = () =>
  createSelector(selectSeedDomain, substate => substate.toJS());

export default makeSelectSeed;
export { selectSeedDomain, makeSelectSeedString };
