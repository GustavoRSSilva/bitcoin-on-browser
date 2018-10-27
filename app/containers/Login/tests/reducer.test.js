import { fromJS } from 'immutable';
import logInReducer from '../reducer';

describe('logInReducer', () => {
  it('returns the initial state', () => {
    expect(logInReducer(undefined, {})).toEqual(fromJS({}));
  });
});
