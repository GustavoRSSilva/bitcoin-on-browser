import { fromJS } from 'immutable';
import mnemonicReducer from '../reducer';

describe('mnemonicReducer', () => {
  it('returns the initial state', () => {
    expect(mnemonicReducer(undefined, {})).toEqual(fromJS({}));
  });
});
