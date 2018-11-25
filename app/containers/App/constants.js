/*
 *
 * App constants
 *
 */

const path = 'app/App/';

// WARNING: do not change this value
//  see public/invalidateSession.js
export const SESSION = 'as';

export const USER = 'se';
export const PASSWORD = 's';
export const MNEMONIC = 'p';
export const ACTIVE_ADDRESS = 'ad';
export const USER_ADDRESSES = 'uer';
export const NETWORK = 'vs';

export const NETWORK_ID = 'network_id';
export const FETCH_NETWORK_STATE = `fetch_network_state`;
export const FETCH_NETWORK = `${path}FETCH_NETWORK`;
export const FETCH_NETWORK_REJECTED = `${path}FETCH_NETWORK_REJECTED`;
export const FETCH_NETWORK_SUCCESSFUL = `${path}FETCH_NETWORK_SUCCESSFUL`;
export const CHANGE_NETWORK_STATE = 'change_network_state';
export const CHANGE_NETWORK = `${path}CHANGE_NETWORK`;
export const CHANGE_NETWORK_REJECTED = `${path}CHANGE_NETWORK_REJECTED`;
export const CHANGE_NETWORK_SUCCESSFUL = `${path}CHANGE_NETWORK_SUCCESSFUL`;

export const USER_CREATED_STATE = 'user_created_state';
export const FETCH_USER_CREATED = `${path}FETCH_USER_CREATED`;
export const FETCH_USER_CREATED_REJECTED = `${path}FETCH_USER_CREATED_REJECTED`;
export const FETCH_USER_CREATED_SUCCESSFUL = `${path}FETCH_USER_CREATED_SUCCESSFUL`;

export const SESSION_VALID_STATE = 'session_valid_state';
export const FETCH_SESSION_VALID = `${path}FETCH_SESSION_VALID`;
export const FETCH_SESSION_VALID_REJECTED = `${path}FETCH_SESSION_VALID_REJECTED`;
export const FETCH_SESSION_VALID_SUCCESSFUL = `${path}FETCH_SESSION_VALID_SUCCESSFUL`;

export const ACTIVE_ADDRESS_FETCH_STATE = 'active_address_fetch_state';
export const FETCH_ACTIVE_ADDRESS = `${path}FETCH_ACTIVE_ADDRESS`;
export const FETCH_ACTIVE_ADDRESS_REJECTED = `${path}FETCH_ACTIVE_ADDRESS_REJECTED`;
export const FETCH_ACTIVE_ADDRESS_SUCCESSFUL = `${path}FETCH_ACTIVE_ADDRESS_SUCCESSFUL`;

export const SAVE_ADDRESS_STATE = 'save_address_state';
export const SAVE_ADDRESS = `${path}SAVE_ADDRESS`;
export const SAVE_ADDRESS_REJECTED = `${path}SAVE_ADDRESS_REJECTED`;
export const SAVE_ADDRESS_SUCCESSFUL = `${path}SAVE_ADDRESS_SUCCESSFUL`;

// fetch the address balance
export const ADDRESS_BALANCE_FETCH_STATE = 'address_balance_fetch_state';
export const FETCH_ADDRESS_BALANCE = `${path}FETCH_ADDRESS_BALANCE`;
export const FETCH_ADDRESS_BALANCE_REJECTED = `${path}FETCH_ADDRESS_BALANCE_REJECTED`;
export const FETCH_ADDRESS_BALANCE_SUCCESSFUL = `${path}FETCH_ADDRESS_BALANCE_SUCCESSFUL`;

//  Fetch the value of btc to fiat
export const BTC_TO_FIAT_FETCH_STATE = 'btc_to_fiat_fetch_state';
export const FETCH_BTC_TO_FIAT_VALUE = `${path}FETCH_BTC_TO_FIAT_VALUE`;
export const FETCH_BTC_TO_FIAT_VALUE_REJECTED = `${path}FETCH_BTC_TO_FIAT_VALUE_REJECTED`;
export const FETCH_BTC_TO_FIAT_VALUE_SUCCESSFUL = `${path}FETCH_BTC_TO_FIAT_VALUE_SUCCESSFUL`;

//  Fetch address transactions
export const ADDRESS_TRANSACTIONS_FETCH_STATE =
  'address_transactions_fetch_state';
export const FETCH_ADDRESS_TRANSACTIONS = `${path}FETCH_ADDRESS_TRANSACTIONS`;
export const FETCH_ADDRESS_TRANSACTIONS_REJECTED = `${path}FETCH_ADDRESS_TRANSACTIONS_REJECTED`;
export const FETCH_ADDRESS_TRANSACTIONS_SUCCESSFUL = `${path}FETCH_ADDRESS_TRANSACTIONS_SUCCESSFUL`;

export const ADDRESS_UXTOS = 'address_utxos';
export const SET_ADDRESS_UXTOS = `${path}SET_ADDRESS_UXTOS`;
