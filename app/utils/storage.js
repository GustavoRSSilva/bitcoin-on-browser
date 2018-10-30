const isExtension = !!(chrome && chrome.storage);

//  Save data on the browser
export const saveItem = (key, value, fn = () => null) => {
  if (isExtension) {
    return chrome.storage.local.set({ [key]: value }, fn);
  }

  window.localStorage.setItem([key], value);
  return fn();
};

//  Fetch data from the browser
export const getItem = (key, fn = () => null) => {
  if (isExtension) {
    return chrome.storage.local.get([key], fn);
  }

  const item = window.localStorage.getItem(key);
  fn(item);
  return item;
};
