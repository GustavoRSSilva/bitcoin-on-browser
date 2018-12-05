/*
 *
 * Mnemonic actions
 *
 */

import {
  GENERATE_NEW_MNEMONIC,
  SET_MNEMONIC,
  SAVE_MNEMONIC,
  SAVE_MNEMONIC_REJECTED,
  SAVE_MNEMONIC_SUCCESSFUL,
  SET_NUM_WORDS_MNEMONIC,
} from './constants';

export function generateNewMnemonic(payload) {
  return {
    type: GENERATE_NEW_MNEMONIC,
    payload,
  };
}

export function setMnemonic(payload) {
  return {
    type: SET_MNEMONIC,
    payload,
  };
}

export function saveMnemonic(payload) {
  return {
    type: SAVE_MNEMONIC,
    payload,
  };
}

export function saveMnemonicRejected(payload) {
  return {
    type: SAVE_MNEMONIC_REJECTED,
    payload,
  };
}

export function saveMnemonicSuccessful(payload) {
  return {
    type: SAVE_MNEMONIC_SUCCESSFUL,
    payload,
  };
}

export function setNumWordsMnemonic(payload) {
  return {
    type: SET_NUM_WORDS_MNEMONIC,
    payload,
  };
}
