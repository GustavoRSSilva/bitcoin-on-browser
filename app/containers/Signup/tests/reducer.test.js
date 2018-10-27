import { fromJS } from 'immutable';
import signUpReducer from '../reducer';

describe('signUpReducer', () => {
  it('returns the initial state', () => {
    expect(signUpReducer(undefined, {})).toEqual(fromJS({}));
  });
});
