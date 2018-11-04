/*
 *
 * Seed actions
 *
 */

import {
  GENERATE_NEW_SEED,
  SET_SEED,
  SAVE_SEED,
  SAVE_SEED_REJECTED,
  SAVE_SEED_SUCCESSFUL,
} from './constants';

export function generateNewSeed() {
  return {
    type: GENERATE_NEW_SEED,
  };
}

export function setSeed(payload) {
  return {
    type: SET_SEED,
    payload,
  };
}

export function saveSeed(payload) {
  return {
    type: SAVE_SEED,
    payload,
  };
}

export function saveSeedRejected(payload) {
  return {
    type: SAVE_SEED_REJECTED,
    payload,
  };
}

export function saveSeedSuccessful(payload) {
  return {
    type: SAVE_SEED_SUCCESSFUL,
    payload,
  };
}
