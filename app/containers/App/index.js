/**
 *
 * App
 *
 */

import React from 'react';
import { compose } from 'redux';
import { Route, Switch } from 'react-router-dom';

import Header from 'components/Header';
import HomePage from 'containers/HomePage/Loadable';
import SignUp from 'containers/SignUp/Loadable';
import LogIn from 'containers/LogIn/Loadable';
import Mnemonic from 'containers/Mnemonic/Loadable';
import Receive from 'containers/Receive/Loadable';
import Send from 'containers/Send/Loadable';
import NotSupportedPage from 'containers/NotSupportedPage/Loadable';
import Layout from 'components/common/Layout';
import Body from 'components/common/Body';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
        <Body>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signUp" exact component={SignUp} />
            <Route path="/logIn" exact component={LogIn} />
            <Route path="/mnemonic" exact component={Mnemonic} />
            <Route path="/receive" exact component={Receive} />
            <Route path="/send" exact component={Send} />
            <Route component={NotSupportedPage} />
          </Switch>
        </Body>
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
