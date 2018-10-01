import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the seedPage state domain
 */

const selectSeedPageDomain = state => state.get('seedPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SeedPage
 */

const makeSelectSeedPage = () =>
  createSelector(selectSeedPageDomain, substate => substate.toJS());

export default makeSelectSeedPage;
export { selectSeedPageDomain };
