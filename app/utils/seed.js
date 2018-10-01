const SEED = '12seed';

export const saveSeed = (seed, fn = null) => {
  chrome.storage.local.set({ [SEED]: seed }, fn);
};
