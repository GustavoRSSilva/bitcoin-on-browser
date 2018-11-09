/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import {
  selectSessionValidState,
  selectUserCreatedState,
  selectActiveAddressFetchState,
  selectAddressBalanceFetchState,
  selectBtcToFiatFetchState,
  selectAddressTransactionsFetchState,
} from 'containers/App/selectors';

import AddressTitle from 'components/AddressTitle';
import PageTitle from 'components/common/PageTitle';
import AddressBalance from 'components/AddressBalance';

import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { TransactionsFragment } from './styles';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  componentWillMount() {
    const {
      fetchSessionValid,
      fetchUserCreated,
      fetchActiveAddress,
    } = this.props;
    fetchUserCreated();
    fetchSessionValid();
    fetchActiveAddress();
  }

  isRequesting() {
    const requesting = 'requesting';
    const { sessionValidState, userCreatedState } = this.props;
    return sessionValidState[requesting] || userCreatedState[requesting];
  }

  //  @dev - check if the user object is NOT created
  //  Only after the user is fetched and returnned false
  isUserNotCreated() {
    const { userCreatedState } = this.props;
    return userCreatedState.data === false || userCreatedState.error === true;
  }

  isSessionNotValid() {
    const { sessionValidState } = this.props;
    return (
      !this.isUserNotCreated() &&
      (sessionValidState.data === false || sessionValidState.error === true)
    );
  }

  isActiveAddressNotCreated() {
    const { activeAddressFetchState } = this.props;
    return (
      !this.isUserNotCreated() &&
      (activeAddressFetchState.data === false ||
        activeAddressFetchState.error === true)
    );
  }

  render() {
    const { history } = this.props;

    if (this.isRequesting()) {
      return <div>requesting</div>;
    }

    // check if there is not a user
    if (this.isUserNotCreated()) {
      history.push('/signUp');
      return null;
    }

    //  check if the user is valid, if not redirect to the login page
    if (this.isSessionNotValid()) {
      history.push('/logIn');
      return null;
    }

    if (this.isActiveAddressNotCreated()) {
      history.push('/mnemonic');
      return null;
    }

    const activeAddress = this.props.activeAddressFetchState.data;
    const balance = this.props.addressBalanceFetchState.data;

    // TODO: set this value to the future be either USD, Eur, GBP, etc.
    //  As for now it is only available in USD.
    const btcToFiat = this.props.btcToFiatFetchState.data
      ? this.props.btcToFiatFetchState.data.bpi.USD
      : null;

    console.log(this.props);
    return (
      <div>
        <AddressTitle address={activeAddress} />
        <AddressBalance balance={balance} btcToFiat={btcToFiat} />
        <TransactionsFragment>
          <PageTitle>
            <FormattedMessage {...messages.header} />
          </PageTitle>
        </TransactionsFragment>
      </div>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.object.isRequired,
  fetchUserCreated: PropTypes.func.isRequired,
  userCreatedState: PropTypes.object.isRequired,
  fetchSessionValid: PropTypes.func.isRequired,
  sessionValidState: PropTypes.object.isRequired,
  fetchActiveAddress: PropTypes.func.isRequired,
  activeAddressFetchState: PropTypes.object.isRequired,
  addressBalanceFetchState: PropTypes.object.isRequired,
  btcToFiatFetchState: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userCreatedState: selectUserCreatedState(),
  sessionValidState: selectSessionValidState(),
  activeAddressFetchState: selectActiveAddressFetchState(),
  addressBalanceFetchState: selectAddressBalanceFetchState(),
  btcToFiatFetchState: selectBtcToFiatFetchState(),
  addressTransactionsFetchState: selectAddressTransactionsFetchState(),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
