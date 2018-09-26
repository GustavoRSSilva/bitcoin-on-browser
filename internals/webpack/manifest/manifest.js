module.exports = {
  manifest_version: 2,
  name: 'My Extension',
  short_name: 'Extension',
  description:
    'This extension is a starting point to create a real Chrome extension',
  version: '0.0.1',
  background_color: '#fafafa',
  theme_color: '#b1624d',
  browser_action: {
    default_popup: 'index.html',
    default_title: 'Open the popup',
  },
  permissions: [
    'storage',
    'unlimitedStorage',
    'clipboardWrite',
    'http://localhost:8545/',
    'https://*.insight.bitpay.com//',
    'activeTab',
    'webRequest',
    'notifications',
  ],
};
