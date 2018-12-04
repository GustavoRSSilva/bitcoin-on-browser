/**
 *
 * HomePage
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import {
  selectNetworkId,
  selectSessionValidState,
  selectUserCreatedState,
  selectActiveAddressFetchState,
  selectAddressBalanceFetchState,
  selectBtcToFiatFetchState,
  selectAddressTransactionsFetchState,
} from 'containers/App/selectors';

import AddressTitle from 'components/AddressTitle';
import AddressBalance from 'components/AddressBalance';
import AddressTransactions from 'components/AddressTransactions';
import ReceiveAndSendLinks from 'components/ReceiveAndSendLinks';

import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeNetwork = this.handleChangeNetwork.bind(this);
  }

  componentWillMount() {
    const {
      fetchNetwork,
      fetchSessionValid,
      fetchUserCreated,
      fetchActiveAddress,
      fetchEstimatedFees,
    } = this.props;

    fetchNetwork();
    fetchUserCreated();
    fetchSessionValid();
    fetchActiveAddress();
    fetchEstimatedFees();
  }

  componentDidUpdate() {
    const { history } = this.props;

    if (this.isUserNotCreated()) {
      history.push('/signUp');
    } else if (this.isSessionNotValid()) {
      history.push('/logIn');
    } else if (this.isActiveAddressNotCreated()) {
      history.push('/mnemonic');
    }
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

  handleChangeNetwork(evt) {
    const { changeNetwork } = this.props;
    const { value } = evt.target;
    changeNetwork(value);
  }

  render() {
    const {
      activeAddressFetchState,
      addressBalanceFetchState,
      btcToFiatFetchState,
      addressTransactionsFetchState,
      networkId,
    } = this.props;

    const activeAddress = activeAddressFetchState.data;
    const balance = addressBalanceFetchState.data;

    // TODO: set this value to the future be either USD, EUR, GBP, etc.
    //  As for now it is only available in USD.
    const btcToFiat = btcToFiatFetchState.data
      ? btcToFiatFetchState.data.bpi.USD
      : null;

    const transactions = addressTransactionsFetchState.data || [];

    return (
      <Fragment>
        <AddressTitle
          address={activeAddress}
          networkId={networkId}
          handleChangeNetwork={this.handleChangeNetwork}
        />
        <AddressBalance
          networkId={networkId}
          balance={balance}
          btcToFiat={btcToFiat}
        />
        <ReceiveAndSendLinks />
        <AddressTransactions
          transactions={transactions}
          btcToFiat={btcToFiat}
          address={activeAddress}
          networkId={networkId}
        />
      </Fragment>
    );
  }
}

HomePage.propTypes = {
  networkId: PropTypes.string.isRequired,
  fetchNetwork: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  fetchUserCreated: PropTypes.func.isRequired,
  userCreatedState: PropTypes.object.isRequired,
  fetchSessionValid: PropTypes.func.isRequired,
  sessionValidState: PropTypes.object.isRequired,
  fetchActiveAddress: PropTypes.func.isRequired,
  activeAddressFetchState: PropTypes.object.isRequired,
  addressBalanceFetchState: PropTypes.object.isRequired,
  btcToFiatFetchState: PropTypes.object.isRequired,
  addressTransactionsFetchState: PropTypes.object.isRequired,
  changeNetwork: PropTypes.func.isRequired,
  fetchEstimatedFees: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  networkId: selectNetworkId(),
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
