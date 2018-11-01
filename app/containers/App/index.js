/**
 *
 * App
 *
 */

import React from 'react';
import { compose } from 'redux';
import { Route, Switch } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import SignUp from 'containers/SignUp/Loadable';
import LogIn from 'containers/LogIn/Loadable';
import Seed from 'containers/Seed/Loadable';
import NotSupportedPage from 'containers/NotSupportedPage/Loadable';
import Layout from 'components/common/Layout';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Seed} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/logIn" exact component={LogIn} />
          <Route path="/seed" exact component={Seed} />
          <Route component={NotSupportedPage} />
        </Switch>
      </Layout>
    );
  }
}

const withReducer = injectReducer({ key: 'app', reducer });
const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withReducer,
  withSaga,
)(App);
