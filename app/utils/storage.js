const USER_SESSION = 'user_session';

//  Save data on the browser
const save = (key, value, fn = () => null) => {
  chrome.storage.local.set({ key: value }, fn);
};

//  Fetch data from the browser
const get = (key, fn = () => null) => chrome.storage.local.get([key], fn);

//  save userSession
export const setUserSession = data => save(USER_SESSION, data);

//  fetch userSession
export const getUserSession = () => get(USER_SESSION);
