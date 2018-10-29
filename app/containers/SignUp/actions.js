/*
 *
 * SignUp actions
 *
 */

import {
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SET_ERROR_MESSAGE,
  SUBMIT_FORM,
  SUBMIT_FORM_REJECTED,
  SUBMIT_FORM_SUCCESSFUL,
} from './constants';

export function setPassword(payload) {
  return {
    type: SET_PASSWORD,
    payload,
  };
}

export function setConfirmPassword(payload) {
  return {
    type: SET_CONFIRM_PASSWORD,
    payload,
  };
}

export function setErrorMessage(payload) {
  return {
    type: SET_ERROR_MESSAGE,
    payload,
  };
}

export function submitForm(payload) {
  return {
    type: SUBMIT_FORM,
    payload,
  };
}

export function submitFormRejected(payload) {
  return {
    type: SUBMIT_FORM_REJECTED,
    payload,
  };
}

export function submitFormSuccessful(payload) {
  return {
    type: SUBMIT_FORM_SUCCESSFUL,
    payload,
  };
}
