/**
 *
 * ReceiveForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import Select from 'components/common/Select';
import TextField from 'components/common/TextField';
import { FLOAT_PATTERN } from 'components/common/TextField/constants';

import appMessages from 'containers/App/messages';

import { TESTNET } from 'utils/constants';

import {
  AMOUNT_CRYPTO,
  UNIT_CRYPTO,
  AMOUNT_FIAT,
  UNIT_FIAT,
} from 'containers/Receive/constants';

import {
  Wrapper,
  PrimaryInputContainer,
  PrimaryUnit,
  SecondaryInputContainer,
  SecondaryUnit,
} from './styles';

const onFocus = evt => evt.target.select();

const toString = val => val.toString().substring(0, 16);

function ReceiveForm(props) {
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
      <PrimaryInputContainer>
        <TextField
          type="text"
          pattern={FLOAT_PATTERN}
          id={AMOUNT_CRYPTO}
          value={toString(amountCrypto)}
          onChange={evt => handleChangeAmount(evt, AMOUNT_CRYPTO)}
          onFocus={onFocus}
          variant="standard"
        />
        <PrimaryUnit>
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
        </PrimaryUnit>
      </PrimaryInputContainer>
      {(() => {
        if (networkId === TESTNET) {
          return null;
        }

        return (
          <SecondaryInputContainer>
            <TextField
              type="text"
              pattern={FLOAT_PATTERN}
              value={toString(amountFiat)}
              onChange={evt => handleChangeAmount(evt, AMOUNT_FIAT)}
              onFocus={onFocus}
              variant="standard"
            />
            <SecondaryUnit>
              <FormattedMessage {...appMessages[unitFiat]} />
            </SecondaryUnit>
          </SecondaryInputContainer>
        );
      })()}
    </Wrapper>
  );
}

ReceiveForm.propTypes = {
  intl: intlShape.isRequired,
  networkId: PropTypes.string.isRequired,
  handleChangeAmount: PropTypes.func.isRequired,
  formValue: PropTypes.object.isRequired,
  availableCryptoUnits: PropTypes.array.isRequired,
  handleChangeUnit: PropTypes.func.isRequired,
};

export default injectIntl(ReceiveForm);
