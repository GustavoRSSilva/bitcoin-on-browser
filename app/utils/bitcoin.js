import bitcoin from 'bitcoinjs-lib';
import bip39 from 'bip39';

const { Buffer } = require('buffer/');

export const sha256 = val => bitcoin.crypto.sha256(Buffer.from(val));
export const generateMnemonic = (
  strength = 160,
  rng = null,
  language = bip39.wordlists.EN,
) => bip39.generateMnemonic(strength, rng, language);

export const validateMnemonic = words => bip39.validateMnemonic(words);
