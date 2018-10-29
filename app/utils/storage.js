const USER_SESSION = 'user_session';

const isExtension = chrome && chrome.storage;

//  Save data on the browser
const save = (key, value, fn = () => null) => {
  if (isExtension) {
    return chrome.storage.local.set({ [key]: value }, fn);
  }

  return window.localStorage.setItem([key], value) && fn;
};

//  Fetch data from the browser
const get = (key, fn = () => null) => {
  if (isExtension) {
    return chrome.storage.local.get([key], fn);
  }

  return window.localStorage.getItem(key) && fn;
};

//  save userSession
export const setUserSession = data => save(USER_SESSION, data);

//  fetch userSession
export const getUserSession = () => get(USER_SESSION);
