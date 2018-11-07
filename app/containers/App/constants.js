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
