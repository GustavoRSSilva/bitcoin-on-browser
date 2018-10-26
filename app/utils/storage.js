//  Save data on the browser
export const save = (key, value) => {
  chrome.storage.local.set({ key: value });
};

//  Fetch data from the browser
export const get = key => chrome.storage.local.get([key]);
