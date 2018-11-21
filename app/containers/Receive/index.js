/**
 *
 * Receive
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import injectReducer from 'utils/injectReducer';

import { TESTNET } from 'utils/constants';
import {
  getFiatAmountFromCrypto,
  getBtcAmountFromFiat,
} from 'utils/conversion';

import appMessages from 'containers/App/messages';

import {
  selectActiveAddressFetchState,
  selectNetworkId,
  selectBtcToFiatFetchState,
  selectFormValues,
} from 'containers/App/selectors';

import {
  AMOUNT_CRYPTO,
  UNIT_CRYPTO,
  AMOUNT_FIAT,
  UNIT_FIAT,
} from './constants';
import * as actions from './actions';
import reducer from './reducer';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Receive extends React.Component {
  componentWillMount() {
    const { fetchActiveAddress } = this.props;

    fetchActiveAddress();
  }

  /**
   *   @dev
   *       Changes the form amout values
   *       On TESTNET (bitcoin testnet) the amount in fiat is always zero
   */
  handleChangeAmount(evt, target) {
    evt.preventDefault();

    const { value } = evt.target;
    const {
      receiveFormValues,
      setFormValue,
      btcToFiatFetchState,
      networkId,
    } = this.props;

    // TODO: set this value to the future be either USD, Eur, GBP, etc.
    //  As for now it is only available in USD.
    const btcToFiat = btcToFiatFetchState.data
      ? btcToFiatFetchState.data.bpi.USD
      : null;

    const unitCrypto = receiveFormValues[UNIT_CRYPTO];

    if (target === AMOUNT_CRYPTO) {
      receiveFormValues[AMOUNT_CRYPTO] = value;
      receiveFormValues[AMOUNT_FIAT] = getFiatAmountFromCrypto(
        value,
        btcToFiat,
        unitCrypto,
        networkId,
      );
    } else if (target === AMOUNT_FIAT && networkId !== TESTNET) {
      receiveFormValues[AMOUNT_FIAT] = value;
      receiveFormValues[AMOUNT_CRYPTO] = getBtcAmountFromFiat(
        value,
        btcToFiat,
        unitCrypto,
        networkId,
      );
    }

    return setFormValue(receiveFormValues);
  }

  renderBackArrow() {
    //  Todo add back arrow
    return null;
  }

  renderReceiveForm() {
    const { receiveFormValues, networkId } = this.props;

    if (!receiveFormValues.unit) {
      return null;
    }

    return (
      <div>
        <label htmlFor={AMOUNT_CRYPTO}>
          <input
            id={AMOUNT_CRYPTO}
            type="number"
            value={receiveFormValues[AMOUNT_CRYPTO]}
            onChange={evt => this.handleChangeAmount(evt, AMOUNT_CRYPTO)}
          />
          <FormattedMessage {...appMessages[receiveFormValues[UNIT_CRYPTO]]} />
        </label>
        <label htmlFor={AMOUNT_FIAT}>
          <input
            id={AMOUNT_FIAT}
            type="number"
            value={receiveFormValues[AMOUNT_FIAT]}
            disable={networkId === TESTNET}
            onChange={evt => this.handleChangeAmount(evt, AMOUNT_FIAT)}
          />
          <FormattedMessage {...appMessages[UNIT_FIAT]} />
        </label>
      </div>
    );
  }

  render() {
    const { activeAddressFetchState, networkId } = this.props;
    const activeAddress = activeAddressFetchState.data;

    return (
      <Fragment>
        {this.renderBackArrow()}
        {this.renderReceiveForm(networkId, activeAddress)}
      </Fragment>
    );
  }
}

Receive.propTypes = {
  networkId: PropTypes.string.isRequired,
  activeAddressFetchState: PropTypes.object.isRequired,
  btcToFiatFetchState: PropTypes.object.isRequired,
  receiveFormValues: PropTypes.object.isRequired,
  setFormValue: PropTypes.func.isRequired,
  fetchActiveAddress: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  networkId: selectNetworkId(),
  activeAddressFetchState: selectActiveAddressFetchState(),
  btcToFiatFetchState: selectBtcToFiatFetchState(),
  receiveFormValues: selectFormValues(),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'receive', reducer });

export default compose(
  withReducer,
  withConnect,
)(Receive);
