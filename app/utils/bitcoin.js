import bitcoin from 'bitcoinjs-lib';
import bip39 from 'bip39';

import { TWELVE_WORDS_MNEMONIC } from './constants';

const { Buffer } = require('buffer/');
const bitcoinNetwork = bitcoin.networks.bitcoin;
const getAddress = (node, network = bitcoinNetwork) =>
  bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address;

export const sha256 = val => bitcoin.crypto.sha256(Buffer.from(val));

export const generateMnemonic = (
  strength = TWELVE_WORDS_MNEMONIC,
  rng = null,
  language = bip39.wordlists.EN,
) => bip39.generateMnemonic(strength, rng, language);

export const validateMnemonic = words => bip39.validateMnemonic(words);

export const getAddressFromMnemonic = (mnemonic, address = 0) => {
  const seed = bip39.mnemonicToSeed(mnemonic);
  const root = bitcoin.bip32.fromSeed(seed, bitcoinNetwork);
  return getAddress(root.derivePath(`m/0'/0/${address}`));
};
