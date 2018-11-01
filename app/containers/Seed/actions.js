/*
 *
 * Seed actions
 *
 */

import { GENERATE_NEW_SEED, SET_SEED } from './constants';

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
