/*
 *
 * SignUp actions
 *
 */

import {
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SUBMIT_PASSWORD,
  SET_ERROR_MESSAGE,
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

export function submitPassword(payload) {
  return {
    type: SUBMIT_PASSWORD,
    payload,
  };
}


function setErrorMessage(payload) {
  return {
    type: SET_ERROR_MESSAGE,
    payload,
  };
}
