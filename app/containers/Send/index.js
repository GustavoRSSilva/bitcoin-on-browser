/**
 *
 * Send
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { AVAILABLE_CRYPTO_UNITS } from 'utils/constants';

// import { validateAddress } from 'utils/bitcoin';

import {
  getFiatAmountFromCrypto,
  getCryptoAmountAndUnitFromFiat,
  convertCryptoFromUnitToUnit,
} from 'utils/conversion';

import CloseButton from 'components/common/CloseButton';
import SendAdvancedCard from 'components/SendAdvancedCard';
import SendForm from 'components/SendForm';

import {
  selectNetworkId,
  selectBtcToFiatFetchState,
  selectAddressUtxos,
} from 'containers/App/selectors';

import {
  AMOUNT_CRYPTO,
  UNIT_CRYPTO,
  AMOUNT_FIAT,
  ADDRESS_TO,
} from './constants';

import * as actions from './actions';
import { selectFormValues } from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Send extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeavePage = this.handleLeavePage.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeUnit = this.handleChangeUnit.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
  }

  componentWillMount() {
    const { resetFormValues } = this.props;
    resetFormValues();
  }

  handleLeavePage() {
    const { history } = this.props;
    history.goBack();
  }

  handleChangeAddress(evt, target) {
    const address = evt.target.value;

    const {
      sendFormValues,
      setFormValues,
      // networkId,
    } = this.props;

    const formValues = { ...sendFormValues };

    // const isValid = validateAddress(address, networkId);

    if (target === ADDRESS_TO) {
      // if (!isValid) {
      // }
      formValues[ADDRESS_TO] = address;
    }

    return setFormValues(formValues);
  }

  /**
   *   @dev
   *       Changes the form amout values
   *       On TESTNET (bitcoin testnet) the amount in fiat is always zero
   */
  // TODO: Test this!!
  handleChangeAmount(evt, target) {
    //  the value needs to pass the regex
    if (evt.target.value && !evt.target.validity.valid) {
      return null;
    }

    let value = evt.target.value || '0';

    //  remove zeros at the left after the first
    //  ex: 001. => 1.,
    //  ex: 00.1 => 0.1
    //  ex: 012 => 12
    //  ex: . => 0.
    if (value === '.') {
      value = '0.';
    }
    const valSplit = value.split('.');
    const addPoint = valSplit[1] !== undefined ? `.${valSplit[1]}` : '';
    value = `${parseInt(valSplit[0] || '0', 10)}${addPoint}`;

    const {
      sendFormValues,
      setFormValues,
      btcToFiatFetchState,
      networkId,
    } = this.props;

    const formValues = {
      ...sendFormValues,
    };

    const unitCrypto = sendFormValues[UNIT_CRYPTO];

    // TODO: set this value to the future be either USD, EUR, GBP, etc.
    //  As for now it is only available in USD.
    const btcToFiat = btcToFiatFetchState.data
      ? btcToFiatFetchState.data.bpi.USD.rate_float
      : null;

    if (target === AMOUNT_CRYPTO) {
      formValues[AMOUNT_CRYPTO] = value;
      formValues[AMOUNT_FIAT] = getFiatAmountFromCrypto(
        parseFloat(value),
        btcToFiat,
        unitCrypto,
        networkId,
      ).toString();
    } else if (target === AMOUNT_FIAT) {
      formValues[AMOUNT_FIAT] = value;
      const { amount, unit } = getCryptoAmountAndUnitFromFiat(
        parseFloat(value),
        btcToFiat,
        networkId,
        4,
      );
      formValues[AMOUNT_CRYPTO] = amount;
      formValues[UNIT_CRYPTO] = unit;
    }

    return setFormValues(formValues);
  }

  handleChangeUnit(evt, target) {
    const { value } = evt.target;

    if (!value || !AVAILABLE_CRYPTO_UNITS.includes(value)) {
      return null;
    }

    const { sendFormValues, setFormValues } = this.props;

    const formValues = {
      ...sendFormValues,
    };

    if (target === UNIT_CRYPTO) {
      const amountCrypto = convertCryptoFromUnitToUnit(
        sendFormValues[AMOUNT_CRYPTO],
        sendFormValues[UNIT_CRYPTO],
        value,
      );
      formValues[AMOUNT_CRYPTO] = amountCrypto;
      formValues[UNIT_CRYPTO] = value;
    }

    return setFormValues(formValues);
  }

  renderCloseButton() {
    return <CloseButton onClick={this.handleLeavePage} />;
  }

  renderSendForm() {
    const { sendFormValues, networkId } = this.props;

    if (!sendFormValues[UNIT_CRYPTO]) {
      return null;
    }

    return (
      <SendForm
        networkId={networkId}
        handleChangeAddress={this.handleChangeAddress}
        handleChangeAmount={this.handleChangeAmount}
        formValue={sendFormValues}
        availableCryptoUnits={AVAILABLE_CRYPTO_UNITS}
        handleChangeUnit={this.handleChangeUnit}
      />
    );
  }

  renderAdvanced(addressUtxos) {
    return <SendAdvancedCard utxos={addressUtxos} />;
  }

  render() {
    const { addressUtxos } = this.props;
    return (
      <Fragment>
        {this.renderCloseButton()}
        {this.renderSendForm()}
        {this.renderAdvanced(addressUtxos)}
      </Fragment>
    );
  }
}

Send.propTypes = {
  history: PropTypes.object.isRequired,
  networkId: PropTypes.string.isRequired,
  btcToFiatFetchState: PropTypes.object.isRequired,
  sendFormValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  resetFormValues: PropTypes.func.isRequired,
  addressUtxos: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  networkId: selectNetworkId(),
  btcToFiatFetchState: selectBtcToFiatFetchState(),
  sendFormValues: selectFormValues(),
  addressUtxos: selectAddressUtxos(),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'send',
  reducer,
});
const withSaga = injectSaga({
  key: 'send',
  saga,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Send);
