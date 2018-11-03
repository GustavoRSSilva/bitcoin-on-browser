import { takeLatest, put } from 'redux-saga/effects';

import { generateMnemonic } from 'utils/bitcoin';

import { GENERATE_NEW_SEED } from './constants';
import { setSeed } from './actions';

// Watcher sagas

function* callGenerateSeed() {
  const seed = generateMnemonic();
  yield put(setSeed(seed));
}

function* generateSeedSaga() {
  yield takeLatest(GENERATE_NEW_SEED, callGenerateSeed);
}

// Root sagas
export default function* defaultSaga() {
  yield [generateSeedSaga()];
}
