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

import appMessages from 'containers/App/messages';

import { TESTNET } from 'utils/constants';

import {
  AMOUNT_CRYPTO,
  UNIT_CRYPTO,
  AMOUNT_FIAT,
  UNIT_FIAT,
} from 'containers/Receive/constants';

import { Wrapper, InputContainer, Unit } from './styles';

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
) => (
  <Fragment>
    <InputContainer>
      <TextField
        type="text"
        pattern="^\d+(\.\d*)?$"
        value={toString(amountCrypto)}
        onChange={evt => handleChangeAmount(evt, AMOUNT_CRYPTO)}
        onFocus={onFocus}
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
            pattern="^\d+(\.\d*)?$"
            value={toString(amountCrypto)}
            onChange={evt => handleChangeAmount(evt, AMOUNT_CRYPTO)}
            onFocus={onFocus}
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
    handleChangeAmount,
    formValue,
    availableCryptoUnits,
    handleChangeUnit,
  } = props;

  const { formatMessage } = props.intl;
  const amountCrypto = formValue[AMOUNT_CRYPTO];
  const unitCrypto = formValue[UNIT_CRYPTO];
  const amountFiat = formValue[AMOUNT_FIAT];
  const unitFiat = formValue[UNIT_FIAT];

  return (
    <Wrapper>
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
      )}
    </Wrapper>
  );
}

SendForm.propTypes = {
  intl: intlShape.isRequired,
  networkId: PropTypes.string.isRequired,
  handleChangeAmount: PropTypes.func.isRequired,
  formValue: PropTypes.object.isRequired,
  availableCryptoUnits: PropTypes.array.isRequired,
  handleChangeUnit: PropTypes.func.isRequired,
};

export default injectIntl(SendForm);
