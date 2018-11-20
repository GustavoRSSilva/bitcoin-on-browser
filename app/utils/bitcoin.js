import bitcoin from 'bitcoinjs-lib';
import bip39 from 'bip39';

import { TWELVE_WORDS_MNEMONIC, MAINNET, TESTNET } from './constants';

const { Buffer } = require('buffer/');

const bitcoinNetwork = bitcoin.networks.bitcoin;
const testnetNetwork = bitcoin.networks.testnet;

export const sha256 = val => bitcoin.crypto.sha256(Buffer.from(val));

const getAddress = (node, network) =>
  bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address;

export const generateMnemonic = (
  strength = TWELVE_WORDS_MNEMONIC,
  rng = null,
  language = bip39.wordlists.EN,
) => bip39.generateMnemonic(strength, rng, language);

export const validateMnemonic = words => bip39.validateMnemonic(words);

export const getAddressFromMnemonic = (
  mnemonic,
  address = 0,
  networkId = MAINNET,
) => {
  const coinType = networkId === TESTNET ? 1 : 0;
  const path = `m/44'/${coinType}'/0'/0/${address}`;

  const network = networkId === TESTNET ? testnetNetwork : bitcoinNetwork;

  const seed = bip39.mnemonicToSeed(mnemonic);
  const root = bitcoin.bip32.fromSeed(seed, network);
  const child = root.derivePath(path);
  return getAddress(child, network);
};
