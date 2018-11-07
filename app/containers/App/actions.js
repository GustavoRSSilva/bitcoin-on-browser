/*
 *
 * App actions
 *
 */

import {
  FETCH_USER_CREATED,
  FETCH_USER_CREATED_REJECTED,
  FETCH_USER_CREATED_SUCCESSFUL,
  FETCH_SESSION_VALID,
  FETCH_SESSION_VALID_REJECTED,
  FETCH_SESSION_VALID_SUCCESSFUL,
  FETCH_MNEMONIC_CREATED,
  FETCH_MNEMONIC_CREATED_REJECTED,
  FETCH_MNEMONIC_CREATED_SUCCESSFUL,
  SAVE_ADDRESS,
  SAVE_ADDRESS_REJECTED,
  SAVE_ADDRESS_SUCCESSFUL,
} from './constants';

export function fetchUserCreated() {
  return {
    type: FETCH_USER_CREATED,
  };
}

export function fetchUserCreatedRejected() {
  return {
    type: FETCH_USER_CREATED_REJECTED,
  };
}

export function fetchUserCreatedSuccessful(payload) {
  return {
    type: FETCH_USER_CREATED_SUCCESSFUL,
    payload,
  };
}

export function fetchSessionValid() {
  return {
    type: FETCH_SESSION_VALID,
  };
}

export function fetchSessionValidRejected(payload) {
  return {
    type: FETCH_SESSION_VALID_REJECTED,
    payload,
  };
}

export function fetchSessionValidSuccessful(payload) {
  return {
    type: FETCH_SESSION_VALID_SUCCESSFUL,
    payload,
  };
}

export function fetchMnemonicCreated() {
  return {
    type: FETCH_MNEMONIC_CREATED,
  };
}

export function fetchMnemonicCreatedRejected() {
  return {
    type: FETCH_MNEMONIC_CREATED_REJECTED,
  };
}

export function fetchMnemonicCreatedSuccessful(payload) {
  return {
    type: FETCH_MNEMONIC_CREATED_SUCCESSFUL,
    payload,
  };
}

export function saveAddress(payload) {
  return {
    type: SAVE_ADDRESS,
    payload,
  };
}

export function saveAddressRejected(payload) {
  return {
    type: SAVE_ADDRESS_REJECTED,
    payload,
  };
}

export function saveAddressSuccessful(payload) {
  return {
    type: SAVE_ADDRESS_SUCCESSFUL,
    payload,
  };
}
