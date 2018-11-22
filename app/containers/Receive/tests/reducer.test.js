import { fromJS } from 'immutable';
import receiveReducer from '../reducer';

describe('receiveReducer', () => {
  it('returns the initial state', () => {
    expect(receiveReducer(undefined, {})).toEqual(fromJS({}));
  });
});
