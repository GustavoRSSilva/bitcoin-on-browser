/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import HomePage from 'containers/HomePage/Loadable';
import NotSupportedPage from 'containers/NotSupportedPage/Loadable';

export default function App() {
  //  @dev - only works as a chrome extension
  if (!chrome || !chrome.storage) {
    return <NotSupportedPage />;
  }

  return <HomePage />;
}
