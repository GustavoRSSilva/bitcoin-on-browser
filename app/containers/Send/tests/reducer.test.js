import { fromJS } from 'immutable';
import sendReducer from '../reducer';

describe('sendReducer', () => {
  it('returns the initial state', () => {
    expect(sendReducer(undefined, {})).toEqual(fromJS({}));
  });
});
