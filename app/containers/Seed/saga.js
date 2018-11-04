import { takeLatest, call, put } from 'redux-saga/effects';

import { generateMnemonic } from 'utils/bitcoin';

import { saveSeed, getSeed } from 'containers/App/saga';
import { fetchSeedCreated } from 'containers/App/actions';

import { GENERATE_NEW_SEED, SAVE_SEED } from './constants';
import { setSeed, saveSeedRejected, saveSeedSuccessful } from './actions';

// Watcher sagas

function* callGenerateSeed() {
  const seed = generateMnemonic();
  yield put(setSeed(seed));
}

function* callSaveSeed(action) {
  try {
    yield call(saveSeed, action.payload);
    const seed = yield getSeed();

    yield put(fetchSeedCreated());

    yield put(saveSeedSuccessful(!!seed));
  } catch (e) {
    yield put(saveSeedRejected());
  }
}

function* generateSeedSaga() {
  yield takeLatest(GENERATE_NEW_SEED, callGenerateSeed);
}

function* saveSeedSaga() {
  yield takeLatest(SAVE_SEED, callSaveSeed);
}

// Root sagas
export default function* defaultSaga() {
  yield [generateSeedSaga(), saveSeedSaga()];
}
