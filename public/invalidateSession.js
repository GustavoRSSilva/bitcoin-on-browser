//  Do no persisnt the session
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.set({ as: false }, () => null);
});
