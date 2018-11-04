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
  FETCH_SEED_CREATED,
  FETCH_SEED_CREATED_REJECTED,
  FETCH_SEED_CREATED_SUCCESSFUL,
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

export function fetchSeedCreated() {
  return {
    type: FETCH_SEED_CREATED,
  };
}

export function fetchSeedCreatedRejected() {
  return {
    type: FETCH_SEED_CREATED_REJECTED,
  };
}

export function fetchSeedCreatedSuccessful(payload) {
  return {
    type: FETCH_SEED_CREATED_SUCCESSFUL,
    payload,
  };
}
