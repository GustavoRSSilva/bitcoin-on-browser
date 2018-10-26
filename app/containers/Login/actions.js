/*
 *
 * LogIn actions
 *
 */

import { SET_PASSWORD, SUBMIT_PASSWORD } from './constants';

export function setPassword(payload) {
  return {
    type: SET_PASSWORD,
    payload,
  };
}

export function submitPassword(payload) {
  return {
    type: SUBMIT_PASSWORD,
    payload,
  };
}
