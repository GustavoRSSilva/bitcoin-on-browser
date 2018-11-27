import bitcoin from 'bitcoinjs-lib';
import bip39 from 'bip39';

import { TWELVE_WORDS_MNEMONIC, MAINNET, TESTNET } from './constants';

const { Buffer } = require('buffer/');

const bitcoinNetwork = bitcoin.networks.bitcoin;
const testnetNetwork = bitcoin.networks.testnet;

const getAddress = (node, network) =>
  bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address;

const getNetwork = networkId =>
  networkId === TESTNET ? testnetNetwork : bitcoinNetwork;

const clean = str => str.replace(/[^0-9a-z]/gi, '');

export const getRootFromMnemonic = (mnemonic, network) => {
  const seed = bip39.mnemonicToSeed(mnemonic);
  const root = bitcoin.bip32.fromSeed(seed, network);
  return root;
};

export const validateAddress = (address, networkId) => {
  try {
    bitcoin.address.toOutputScript(address, getNetwork(networkId));
    return true;
  } catch (e) {
    return false;
  }
};

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

  const root = getRootFromMnemonic(mnemonic, network);
  const child = root.derivePath(path);
  return getAddress(child, network);
};

export const createTransactionFromMnemonic = (
  mnemonic,
  utxos = [],
  receiverAmount,
  addressTo,
  addressFrom,
  fee,
  networkId,
) => {
  if (!validateAddress(addressTo, networkId)) {
    throw new Error('invalid address');
  }

  const receiverAddress = clean(addressTo);
  const senderAddress = clean(addressFrom);

  const network = getNetwork(networkId);
  const coinType = networkId === TESTNET ? 1 : 0;
  const path = `m/44'/${coinType}'/0'/0/0`;

  const root = getRootFromMnemonic(mnemonic, network);
  const senderNode = root.derivePath(path);

  const txb = new bitcoin.TransactionBuilder(network);

  let totalUtxosValue = 0;
  utxos.map(utxo => {
    totalUtxosValue += utxo.value;
    return txb.addInput(utxo.txid, utxo.vout);
  });
  txb.addOutput(receiverAddress, receiverAmount);
  txb.addOutput(senderAddress, totalUtxosValue - receiverAmount - fee);

  // qsign the inputs
  for (let i = 0; i < utxos.length; i += 1) {
    txb.sign(i, senderNode);
  }

  return txb.build().toHex();
};
