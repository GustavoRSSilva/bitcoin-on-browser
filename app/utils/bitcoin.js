import bitcoin from 'bitcoinjs-lib';
import bip39 from 'bip39';

import { TWELVE_WORDS_MNEMONIC, MAINNET, TESTNET } from './constants';

const { Buffer } = require('buffer/');

const bitcoinNetwork = bitcoin.networks.bitcoin;
const testnetNetwork = bitcoin.networks.testnet;

const getAddress = (node, network) =>
  bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address;

const validateAddress = (address, networkId) => {
  try {
    bitcoin.address.toOutputScript(address, getNetwork(networkId));
    return true;
  } catch (e) {
    return false;
  }
};

const getNetwork = networkId =>
  networkId === TESTNET ? testnetNetwork : bitcoinNetwork;

export const sha256 = val => bitcoin.crypto.sha256(Buffer.from(val));

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

  const network = getNetwork(networkId);

  const seed = bip39.mnemonicToSeed(mnemonic);
  const root = bitcoin.bip32.fromSeed(seed, network);
  const child = root.derivePath(path);
  return getAddress(child, network);
};

export const createTransaction = (
  senderNode,
  utxos = [],
  receiverAmount,
  receiverAddress,
  fee,
  networkId,
) => {
  if (!validateAddress(receiverAddress, networkId)) {
    throw new Error('invalid address');
  }

  const txb = new bitcoin.TransactionBuilder(getNetwork(networkId));

  txb.setVersion(1);
  utxos.map(utxo => txb.addInput(utxo.previous_transaction_id, utxo.index));
  txb.addOutput(receiverAddress, receiverAmount);
  // (in)15000 - (out)12000 = (fee)3000, this is the miner fee

  txb.sign(0, senderNode);
};
