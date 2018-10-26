import { fromJS } from 'immutable';
import seedReducer from '../reducer';

describe('seedReducer', () => {
  it('returns the initial state', () => {
    expect(seedReducer(undefined, {})).toEqual(fromJS({}));
  });
});
