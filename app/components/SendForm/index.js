/**
 *
 * SendForm
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import Select from 'components/common/Select';
import TextField from 'components/common/TextField';
import { FLOAT_PATTERN } from 'components/common/TextField/constants';
import Button from 'components/common/Button';

import appMessages from 'containers/App/messages';

import { TESTNET, SAT } from 'utils/constants';

import { convertCryptoFromUnitToUnit } from 'utils/conversion';

import {
  AMOUNT_CRYPTO,
  UNIT_CRYPTO,
  AMOUNT_FIAT,
  UNIT_FIAT,
  ADDRESS_TO,
  ADDRESS_FROM,
  FEE,
} from 'containers/Send/constants';

import { Form, InputContainer, Unit, NoteRequired } from './styles';
import messages from './messages';

const onFocus = evt => evt.target.select();

const toString = val => val.toString().substring(0, 16);

const renderCurrencyInputs = (
  networkId,
  handleChangeAmount,
  handleChangeUnit,
  amountCrypto,
  unitCrypto,
  amountFiat,
  unitFiat,
  availableCryptoUnits,
  formatMessage,
  amountError,
) => (
  <Fragment>
    <InputContainer>
      <TextField
        type="text"
        label={
          amountError
            ? formatMessage(messages.insufficient_funds)
            : formatMessage(appMessages[unitCrypto])
        }
        pattern={FLOAT_PATTERN}
        value={toString(amountCrypto)}
        onChange={evt => handleChangeAmount(evt, AMOUNT_CRYPTO)}
        onFocus={onFocus}
        placeholder={formatMessage(appMessages[unitCrypto])}
        margin="0"
        error={amountError}
      />
      <Unit>
        <Select
          value={unitCrypto}
          onChange={evt => handleChangeUnit(evt, UNIT_CRYPTO)}
          border="none"
          margin="0"
        >
          {availableCryptoUnits.map(cryptoUnit => (
            <option key={cryptoUnit} value={cryptoUnit}>
              {formatMessage(appMessages[cryptoUnit])}
            </option>
          ))}
        </Select>
      </Unit>
    </InputContainer>
    {(() => {
      if (networkId === TESTNET) {
        return null;
      }

      return (
        <InputContainer>
          <TextField
            type="text"
            label={
              amountError
                ? formatMessage(messages.insufficient_funds)
                : formatMessage(appMessages[unitFiat])
            }
            pattern={FLOAT_PATTERN}
            value={toString(amountFiat)}
            onChange={evt => handleChangeAmount(evt, AMOUNT_FIAT)}
            onFocus={onFocus}
            margin="0"
            placeholder={formatMessage(appMessages[unitFiat])}
            error={amountError}
          />
          <Unit>
            <FormattedMessage {...appMessages[unitFiat]} />
          </Unit>
        </InputContainer>
      );
    })()}
  </Fragment>
);

function SendForm(props) {
  const {
    networkId,
    handleChangeAddress,
    handleChangeAmount,
    formValue,
    availableCryptoUnits,
    handleChangeUnit,
    handleSubmitForm,
    avaialableAmountSatoshis,
  } = props;

  const { formatMessage } = props.intl;
  const amountCrypto = formValue[AMOUNT_CRYPTO];
  const unitCrypto = formValue[UNIT_CRYPTO];
  const amountFiat = formValue[AMOUNT_FIAT];
  const unitFiat = formValue[UNIT_FIAT];
  const fee = formValue[FEE];

  const addressTo = formValue[ADDRESS_TO];
  const addressFrom = formValue[ADDRESS_FROM];

  const amountSatoshis = convertCryptoFromUnitToUnit(
    amountCrypto,
    unitCrypto,
    SAT,
  );
  const amountError = amountSatoshis > avaialableAmountSatoshis;

  return (
    <Form onSubmit={handleSubmitForm}>
      {/* Address inputs */}
      <InputContainer type="address">
        <TextField
          type="text"
          value={addressTo}
          onChange={evt => handleChangeAddress(evt, ADDRESS_TO)}
          placeholder={formatMessage(messages[ADDRESS_TO])}
          margin="0"
          required
        />
      </InputContainer>
      <InputContainer type="address">
        <TextField
          type="text"
          value={addressFrom}
          onChange={() => null}
          placeholder={formatMessage(messages[ADDRESS_FROM])}
          margin="0"
          disable
        />
      </InputContainer>

      {/* Currency inputs */}
      {renderCurrencyInputs(
        networkId,
        handleChangeAmount,
        handleChangeUnit,
        amountCrypto,
        unitCrypto,
        amountFiat,
        unitFiat,
        availableCryptoUnits,
        formatMessage,
        amountError,
      )}

      <InputContainer>
        <TextField
          type="text"
          pattern="^\d+(\.\d*)?$"
          value={toString(fee)}
          onChange={evt => handleChangeAmount(evt, FEE)}
          onFocus={onFocus}
          margin="0"
          placeholder={formatMessage(messages[FEE])}
        />
      </InputContainer>

      <NoteRequired>
        <FormattedMessage {...messages.required} />
      </NoteRequired>

      <Button type="submit">
        <FormattedMessage {...messages.submit} />
      </Button>
    </Form>
  );
}

SendForm.propTypes = {
  intl: intlShape.isRequired,
  networkId: PropTypes.string.isRequired,
  handleChangeAddress: PropTypes.func.isRequired,
  handleChangeAmount: PropTypes.func.isRequired,
  formValue: PropTypes.object.isRequired,
  availableCryptoUnits: PropTypes.array.isRequired,
  handleChangeUnit: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  avaialableAmountSatoshis: PropTypes.number.isRequired,
};

export default injectIntl(SendForm);
