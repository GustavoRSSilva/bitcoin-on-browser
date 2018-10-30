const isExtension = !!(chrome && chrome.storage);

//  Save data on the browser
export const saveItem = (key, value) => {
  if (isExtension) {
    return chrome.storage.local.set({ [key]: value }, () => null);
  }

  return window.localStorage.setItem([key], value);
};

//  Fetch data from the browser async
/* eslint-disable no-console */
export const getItem = function getItem(key) {
  return new Promise((resolve, reject) => {
    if (isExtension) {
      chrome.storage.local.get(key, items => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
          reject(chrome.runtime.lastError.message);
        } else {
          resolve(items[key]);
        }
      });
    } else {
      const item = window.localStorage.getItem(key);

      if (item) {
        resolve(item);
      } else {
        reject();
      }
    }
  });
};
