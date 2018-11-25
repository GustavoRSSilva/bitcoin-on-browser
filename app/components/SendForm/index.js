/**
 *
 * SendForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

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
  PrimaryInput,
  PrimaryUnit,
  SecondaryInputContainer,
  SecondaryInput,
  SecondaryUnit,
} from './styles';

const onFocus = evt => evt.target.select();

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
      <PrimaryInputContainer>
        <PrimaryInput
          type="text"
          pattern="^\d+(\.\d*)?$"
          id={AMOUNT_CRYPTO}
          value={amountCrypto}
          onChange={evt => handleChangeAmount(evt, AMOUNT_CRYPTO)}
          onFocus={onFocus}
        />
        <PrimaryUnit>
          <select
            value={unitCrypto}
            onChange={evt => handleChangeUnit(evt, UNIT_CRYPTO)}
          >
            {availableCryptoUnits.map(cryptoUnit => (
              <option key={cryptoUnit} value={cryptoUnit}>
                {formatMessage(appMessages[cryptoUnit])}
              </option>
            ))}
          </select>
        </PrimaryUnit>
      </PrimaryInputContainer>
      {(() => {
        if (networkId === TESTNET) {
          return null;
        }

        return (
          <SecondaryInputContainer>
            <SecondaryInput
              type="text"
              pattern="^\d*(\.\d*)?$"
              value={amountFiat}
              onChange={evt => handleChangeAmount(evt, AMOUNT_FIAT)}
              onFocus={onFocus}
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

SendForm.propTypes = {
  intl: intlShape.isRequired,
  networkId: PropTypes.string.isRequired,
  handleChangeAmount: PropTypes.func.isRequired,
  formValue: PropTypes.object.isRequired,
  availableCryptoUnits: PropTypes.array.isRequired,
  handleChangeUnit: PropTypes.func.isRequired,
};

export default injectIntl(SendForm);