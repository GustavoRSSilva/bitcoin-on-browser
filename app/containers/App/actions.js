/*
 *
 * App actions
 *
 */

import {
  FETCH_NETWORK,
  FETCH_NETWORK_REJECTED,
  FETCH_NETWORK_SUCCESSFUL,
  CHANGE_NETWORK,
  CHANGE_NETWORK_REJECTED,
  CHANGE_NETWORK_SUCCESSFUL,
  FETCH_USER_CREATED,
  FETCH_USER_CREATED_REJECTED,
  FETCH_USER_CREATED_SUCCESSFUL,
  FETCH_SESSION_VALID,
  FETCH_SESSION_VALID_REJECTED,
  FETCH_SESSION_VALID_SUCCESSFUL,
  FETCH_ACTIVE_ADDRESS,
  FETCH_ACTIVE_ADDRESS_REJECTED,
  FETCH_ACTIVE_ADDRESS_SUCCESSFUL,
  SAVE_ADDRESS,
  SAVE_ADDRESS_REJECTED,
  SAVE_ADDRESS_SUCCESSFUL,
  FETCH_ADDRESS_BALANCE,
  FETCH_ADDRESS_BALANCE_REJECTED,
  FETCH_ADDRESS_BALANCE_SUCCESSFUL,
  FETCH_BTC_TO_FIAT_VALUE,
  FETCH_BTC_TO_FIAT_VALUE_REJECTED,
  FETCH_BTC_TO_FIAT_VALUE_SUCCESSFUL,
  FETCH_ADDRESS_TRANSACTIONS,
  FETCH_ADDRESS_TRANSACTIONS_REJECTED,
  FETCH_ADDRESS_TRANSACTIONS_SUCCESSFUL,
} from './constants';

export function fetchNetwork() {
  return {
    type: FETCH_NETWORK,
  };
}

export function fetchNetworkRejected() {
  return {
    type: FETCH_NETWORK_REJECTED,
  };
}

export function fetchNetworkSuccessful(payload) {
  return {
    type: FETCH_NETWORK_SUCCESSFUL,
    payload,
  };
}

export function changeNetwork(payload) {
  return {
    type: CHANGE_NETWORK,
    payload,
  };
}

export function changeNetworkRejected(payload) {
  return {
    type: CHANGE_NETWORK_REJECTED,
    payload,
  };
}

export function changeNetworkSuccessful(payload) {
  return {
    type: CHANGE_NETWORK_SUCCESSFUL,
    payload,
  };
}

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

export function fetchActiveAddress() {
  return {
    type: FETCH_ACTIVE_ADDRESS,
  };
}

export function fetchActiveAddressRejected() {
  return {
    type: FETCH_ACTIVE_ADDRESS_REJECTED,
  };
}

export function fetchActiveAddressSuccessful(payload) {
  return {
    type: FETCH_ACTIVE_ADDRESS_SUCCESSFUL,
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

export function fetchAddressBalance(payload) {
  return {
    type: FETCH_ADDRESS_BALANCE,
    payload,
  };
}

export function fetchAddressBalanceRejected(payload) {
  return {
    type: FETCH_ADDRESS_BALANCE_REJECTED,
    payload,
  };
}

export function fetchAddressBalanceSuccessful(payload) {
  return {
    type: FETCH_ADDRESS_BALANCE_SUCCESSFUL,
    payload,
  };
}

export function fetchBtcToFiatValue(payload) {
  return {
    type: FETCH_BTC_TO_FIAT_VALUE,
    payload,
  };
}

export function fetchBtcToFiatValueRejected(payload) {
  return {
    type: FETCH_BTC_TO_FIAT_VALUE_REJECTED,
    payload,
  };
}

export function fetchBtcToFiatValueSuccessful(payload) {
  return {
    type: FETCH_BTC_TO_FIAT_VALUE_SUCCESSFUL,
    payload,
  };
}

//  Fetch the address transactions
export function fetchAddressTransactions(payload) {
  return {
    type: FETCH_ADDRESS_TRANSACTIONS,
    payload,
  };
}

export function fetchAddressTransactionsRejected(payload) {
  return {
    type: FETCH_ADDRESS_TRANSACTIONS_REJECTED,
    payload,
  };
}

export function fetchAddressTransactionsSuccessful(payload) {
  return {
    type: FETCH_ADDRESS_TRANSACTIONS_SUCCESSFUL,
    payload,
  };
}
