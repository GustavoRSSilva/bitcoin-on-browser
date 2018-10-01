import { fromJS } from 'immutable';
import seedPageReducer from '../reducer';

describe('seedPageReducer', () => {
  it('returns the initial state', () => {
    expect(seedPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
