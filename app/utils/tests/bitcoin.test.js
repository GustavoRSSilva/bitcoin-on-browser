/**
 * Test bitcoin
 */

import { generateMnemonic, validateMnemonic } from '../bitcoin';

import {
  FITHTEEN_WORDS_MNEMONIC,
  EIGHTEEN_WORDS_MNEMONIC,
  TWENTY_ONE_WORDS_MNEMONIC,
  TWENTY_FOUR_WORDS_MNEMONIC,
} from '../constants';

const countWords = str => str.split(' ').length;

describe('bitcoin', () => {
  it('should correctly create a 12 word mnemonic', () => {
    const mnemonic = generateMnemonic();
    expect(countWords(mnemonic)).toBe(12);
    expect(validateMnemonic(mnemonic)).toBeTruthy();
  });

  it('should correctly create a 15 word mnemonic', () => {
    const mnemonic = generateMnemonic(FITHTEEN_WORDS_MNEMONIC);
    expect(countWords(mnemonic)).toBe(15);
    expect(validateMnemonic(mnemonic)).toBeTruthy();
  });

  it('should correctly create a 18 word mnemonic', () => {
    const mnemonic = generateMnemonic(EIGHTEEN_WORDS_MNEMONIC);
    expect(countWords(mnemonic)).toBe(18);
    expect(validateMnemonic(mnemonic)).toBeTruthy();
  });

  it('should correctly create a 21 word mnemonic', () => {
    const mnemonic = generateMnemonic(TWENTY_ONE_WORDS_MNEMONIC);
    expect(countWords(mnemonic)).toBe(21);
    expect(validateMnemonic(mnemonic)).toBeTruthy();
  });

  it('should correctly create a 24 word mnemonic', () => {
    const mnemonic = generateMnemonic(TWENTY_FOUR_WORDS_MNEMONIC);
    expect(countWords(mnemonic)).toBe(24);
    expect(validateMnemonic(mnemonic)).toBeTruthy();
  });
});
