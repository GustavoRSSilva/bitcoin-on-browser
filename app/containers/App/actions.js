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

export function fetchSessionValidRejected() {
  return {
    type: FETCH_SESSION_VALID_REJECTED,
  };
}

export function fetchSessionValidSuccessful() {
  return {
    type: FETCH_SESSION_VALID_SUCCESSFUL,
  };
}
