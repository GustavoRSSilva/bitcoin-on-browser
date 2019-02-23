/*
 *
 * Send constants
 *
 */

export const FORM_VALUES = 'form_values';
export const AMOUNT_CRYPTO = 'amount_crypto';
export const UNIT_CRYPTO = 'unit_crypto';
export const AMOUNT_FIAT = 'amount_fiat';
export const UNIT_FIAT = 'unit_fiat';
export const ADDRESS_TO = 'address_to';
export const ADDRESS_FROM = 'address_from';
export const ADDRESS_FROM_UTXOS = 'address_from_utxos';
export const FEE = 'fee';

const path = 'app/Send/';
export const SET_FORM_VALUES = `${path}SET_FORM_VALUES`;
export const RESET_FORM_VALUES = `${path}RESET_FORM_VALUES`;

export const SUBMIT_FORM_STATE = 'submit_form_state';
export const SUBMIT_FORM = `${path}SUBMIT_FORM`;
export const SUBMIT_FORM_REJECTED = `${path}SUBMIT_FORM_REJECTED`;
export const SUBMIT_FORM_SUCCESSFUL = `${path}SUBMIT_FORM_SUCCESSFUL`;
export const RESET_SUBMIT_FORM = `${path}RESET_SUBMIT_FORM`;

export const AVAILABLE_AMOUNT_SATOSHIS = 'available_amount_satoshis';
export const SET_AVAIALABLE_AMOUNT_SATOSHIS = `${path}SET_AVAIALABLE_AMOUNT_SATOSHIS`;
