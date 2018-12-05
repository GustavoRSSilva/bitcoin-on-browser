import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { MNEMONIC, SAVE_MNEMONIC_STATE, NUM_WORDS_MNEMONIC } from './constants';
/**
 * Direct selector to the mnemonic state domain
 */

const selectMnemonicDomain = state => state.get('mnemonic', initialState);

/**
 * Other specific selectors
 */

const selectMnemonicString = () =>
  createSelector(selectMnemonicDomain, subState => subState.get(MNEMONIC));

const selectSaveMnemonicState = () =>
  createSelector(selectMnemonicDomain, subState =>
    subState.get(SAVE_MNEMONIC_STATE),
  );

const selectNumWordsMnemonic = () =>
  createSelector(selectMnemonicDomain, subState =>
    subState.get(NUM_WORDS_MNEMONIC),
  );

/**
 * Default selector used by Mnemonic
 */

const makeSelectMnemonic = () =>
  createSelector(selectMnemonicDomain, substate => substate.toJS());

export default makeSelectMnemonic;
export {
  selectMnemonicDomain,
  selectMnemonicString,
  selectSaveMnemonicState,
  selectNumWordsMnemonic,
};
