/**
 *
 * Send
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
} from 'containers/App/selectors';

import {
  AMOUNT_CRYPTO,
  UNIT_CRYPTO,
  AMOUNT_FIAT,
  ADDRESS_TO,
  ADDRESS_FROM_UTXOS,
  FEE,
} from './constants';

import * as actions from './actions';
import { selectFormValues, selectSubmitFormState } from './selectors';
import reducer from './reducer';
import saga from './saga';
import withRequestHandler from './withRequestHandler';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Send extends React.Component {
  constructor(props) {
    super(props);
    this.handleLeavePage = this.handleLeavePage.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleChangeUnit = this.handleChangeUnit.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleToggleUtxo = this.handleToggleUtxo.bind(this);
  }

  componentWillMount() {
    const { resetFormValues } = this.props;
    resetFormValues();
  }

  componentDidUpdate() {
    const { formSubmitState, history, resetSubmitForm } = this.props;

    // TODO: handle this on the withRequestHandler
    if (formSubmitState.data) {
      resetSubmitForm();
      history.push('/');
    }
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
    } else if (target === FEE) {
      formValues[FEE] = value;
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

  handleSubmitForm(evt) {
    evt.preventDefault();

    const { sendFormValues, submitForm } = this.props;

    //    valdiate form
    //    validate the user has enought funds for the request

    submitForm(sendFormValues);
  }

  handleToggleUtxo(evt, utxoId, vout) {
    evt.preventDefault();
    const { sendFormValues, setFormValues } = this.props;
    const addressUtxos = sendFormValues[ADDRESS_FROM_UTXOS] || [];
    sendFormValues[ADDRESS_FROM_UTXOS] = addressUtxos.map(ut => {
      const utxo = ut;
      if (utxo.txid === utxoId && utxo.vout === vout) {
        utxo.enabled = !utxo.enabled;
      }

      return utxo;
    });

    setFormValues(sendFormValues);
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
        handleSubmitForm={this.handleSubmitForm}
      />
    );
  }

  renderAdvanced() {
    const { sendFormValues } = this.props;
    const addressUtxos = sendFormValues[ADDRESS_FROM_UTXOS] || [];
    return (
      <SendAdvancedCard
        utxos={addressUtxos}
        toggleUtxo={this.handleToggleUtxo}
      />
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderCloseButton()}
        {this.renderSendForm()}
        {this.renderAdvanced()}
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
  submitForm: PropTypes.func.isRequired,
  resetSubmitForm: PropTypes.func.isRequired,
  formSubmitState: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  networkId: selectNetworkId(),
  btcToFiatFetchState: selectBtcToFiatFetchState(),
  sendFormValues: selectFormValues(),
  formSubmitState: selectSubmitFormState(),
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
)(withRequestHandler(Send));
