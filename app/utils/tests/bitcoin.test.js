/**
 * Test bitcoin
 */

import {
  generateMnemonic,
  validateMnemonic,
  getAddressFromMnemonic,
} from '../bitcoin';

import {
  FITHTEEN_WORDS_MNEMONIC,
  EIGHTEEN_WORDS_MNEMONIC,
  TWENTY_ONE_WORDS_MNEMONIC,
  TWENTY_FOUR_WORDS_MNEMONIC,
  MAINNET,
  TESTNET,
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

  it('should create a valid mainnet address', () => {
    const mnemonic =
      'account pair notable coyote combine royal divide latin under teach moon raven';
    const address = 0;
    const expectedMainnetAddress = '128SsFLYiXdubDLArQUA67FuxFbEaAsWg4';

    const mainnetAddress = getAddressFromMnemonic(mnemonic, address, MAINNET);
    expect(expectedMainnetAddress).toBe(mainnetAddress);
  });

  it('should create a valid testnet address', () => {
    const mnemonic =
      'true dinosaur visual olympic cute solar auction fine pool icon gate frost';
    const address = 1;
    const expectedMainnetAddress = 'mwhhsCS2hJrWLB44aptL1dgVFxtUrwr2GB';

    const testnetAddress = getAddressFromMnemonic(mnemonic, address, TESTNET);
    expect(expectedMainnetAddress).toBe(testnetAddress);
  });
});
