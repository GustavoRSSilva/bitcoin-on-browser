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
import { Route, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Login from '';
import Seed from 'containers/Seed/Loadable';
import NotSupportedPage from 'containers/NotSupportedPage/Loadable';
import Layout from 'components/common/Layout';

export default function App() {
  // @dev - only works as a chrome extension
  if (!chrome || !chrome.storage) {
    return <NotSupportedPage />;
  }

  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/seed" exact component={Seed} />
        <Route component={NotSupportedPage} />
      </Switch>
    </Layout>
  );
}
