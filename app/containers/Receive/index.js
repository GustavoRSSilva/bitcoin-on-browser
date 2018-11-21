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
  convertAmountUnitToBtc,
} from 'utils/conversion';

import BackArrow from 'components/common/BackArrow';
import QRCode from 'components/common/QRCode';
import appMessages from 'containers/App/messages';

import {
  selectActiveAddressFetchState,
  selectNetworkId,
  selectBtcToFiatFetchState,
} from 'containers/App/selectors';

import {
  AMOUNT_CRYPTO,
  UNIT_CRYPTO,
  AMOUNT_FIAT,
  UNIT_FIAT,
} from './constants';
import { selectFormValues } from './selectors';
import * as actions from './actions';
import reducer from './reducer';

/* eslint-disable react/prefer-stateless-function */
export class Receive extends React.Component {
  componentWillMount() {
    const { fetchActiveAddress, resetFormValues } = this.props;
    resetFormValues();
    fetchActiveAddress();
  }

  /**
   *   @dev
   *       Changes the form amout values
   *       On TESTNET (bitcoin testnet) the amount in fiat is always zero
   */
  handleChangeAmount(evt, target) {
    //  thw value needs to pass the regex
    if (evt.target.value && !evt.target.validity.valid) {
      return null;
    }

    const value = evt.target.value || '0';
    const {
      receiveFormValues,
      setFormValues,
      btcToFiatFetchState,
      networkId,
    } = this.props;

    const formValues = receiveFormValues;

    // TODO: set this value to the future be either USD, Eur, GBP, etc.
    //  As for now it is only available in USD.
    const btcToFiat = btcToFiatFetchState.data
      ? btcToFiatFetchState.data.bpi.USD
      : null;

    const unitCrypto = receiveFormValues[UNIT_CRYPTO];

    if (target === AMOUNT_CRYPTO) {
      formValues[AMOUNT_CRYPTO] = value;
      formValues[AMOUNT_FIAT] = getFiatAmountFromCrypto(
        value,
        btcToFiat,
        unitCrypto,
        networkId,
      );
    } else if (target === AMOUNT_FIAT && networkId !== TESTNET) {
      formValues[AMOUNT_FIAT] = value;
      formValues[AMOUNT_CRYPTO] = getBtcAmountFromFiat(
        value,
        btcToFiat,
        unitCrypto,
        networkId,
      );
    }
    return setFormValues(formValues);
  }

  renderBackArrow() {
    return <BackArrow to="/" target="homepage" />;
  }

  renderReceiveForm() {
    const { receiveFormValues } = this.props;

    if (!receiveFormValues[UNIT_CRYPTO]) {
      return null;
    }

    return (
      <div>
        <label htmlFor={AMOUNT_CRYPTO}>
          <input
            type="text"
            pattern="^\d*(\.\d*)?$"
            id={AMOUNT_CRYPTO}
            value={receiveFormValues[AMOUNT_CRYPTO]}
            onChange={evt => this.handleChangeAmount(evt, AMOUNT_CRYPTO)}
            onFocus={evt => evt.target.select()}
          />
          <FormattedMessage {...appMessages[receiveFormValues[UNIT_CRYPTO]]} />
        </label>
        <label htmlFor={AMOUNT_FIAT}>
          <input
            type="text"
            pattern="^\d*(\.\d*)?$"
            id={AMOUNT_FIAT}
            value={receiveFormValues[AMOUNT_FIAT]}
            onChange={evt => this.handleChangeAmount(evt, AMOUNT_FIAT)}
            onFocus={evt => evt.target.select()}
          />
          <FormattedMessage {...appMessages[receiveFormValues[UNIT_FIAT]]} />
        </label>
      </div>
    );
  }

  renderQRCode(activeAddress) {
    if (!activeAddress) {
      return null;
    }

    const { receiveFormValues } = this.props;
    const amountCrypto = receiveFormValues[AMOUNT_CRYPTO];
    const unitCrypto = receiveFormValues[UNIT_CRYPTO];

    const amountBtc = convertAmountUnitToBtc(
      parseFloat(amountCrypto),
      unitCrypto,
    );

    return (
      <QRCode
        key={`${activeAddress}-${amountBtc}`}
        alt="qr-code"
        src={`https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=bitcoin:${activeAddress}?&amount=${amountBtc}`}
        address={activeAddress}
        displayAddress
      />
    );
  }

  render() {
    const { activeAddressFetchState, networkId } = this.props;
    const activeAddress = activeAddressFetchState.data;

    return (
      <Fragment>
        {this.renderBackArrow()}
        {this.renderReceiveForm(networkId, activeAddress)}
        {this.renderQRCode(activeAddress)}
      </Fragment>
    );
  }
}

Receive.propTypes = {
  networkId: PropTypes.string.isRequired,
  activeAddressFetchState: PropTypes.object.isRequired,
  btcToFiatFetchState: PropTypes.object.isRequired,
  receiveFormValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  fetchActiveAddress: PropTypes.func.isRequired,
  resetFormValues: PropTypes.func.isRequired,
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
