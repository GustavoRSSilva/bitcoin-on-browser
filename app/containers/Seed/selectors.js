import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { SEED, SAVE_SEED_STATE } from './constants';
/**
 * Direct selector to the seed state domain
 */

const selectSeedDomain = state => state.get('seed', initialState);

/**
 * Other specific selectors
 */

const selectSeedString = () =>
  createSelector(selectSeedDomain, subState => subState.get(SEED));

const selectSaveSeedState = () =>
  createSelector(selectSeedDomain, subState => subState.get(SAVE_SEED_STATE));

/**
 * Default selector used by Seed
 */

const makeSelectSeed = () =>
  createSelector(selectSeedDomain, substate => substate.toJS());

export default makeSelectSeed;
export { selectSeedDomain, selectSeedString, selectSaveSeedState };
