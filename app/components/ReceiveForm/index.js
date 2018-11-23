/**
 *
 * ReceiveForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import appMessages from 'containers/App/messages';

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

function ReceiveForm(props) {
  const { handleChangeAmount, formValue } = props;

  const amountCrypto = formValue[AMOUNT_CRYPTO];
  const unitCrypto = formValue[UNIT_CRYPTO];
  const amountFiat = formValue[AMOUNT_FIAT];
  const unitFiat = formValue[UNIT_FIAT];

  return (
    <Wrapper>
      <PrimaryInputContainer>
        <PrimaryInput
          type="text"
          pattern="^\d*(\.\d*)?$"
          id={AMOUNT_CRYPTO}
          value={amountCrypto}
          onChange={evt => handleChangeAmount(evt, AMOUNT_CRYPTO)}
          onFocus={onFocus}
        />
        <PrimaryUnit>
          <FormattedMessage {...appMessages[unitCrypto]} />
        </PrimaryUnit>
      </PrimaryInputContainer>
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
    </Wrapper>
  );
}

ReceiveForm.propTypes = {
  handleChangeAmount: PropTypes.func.isRequired,
  formValue: PropTypes.object.isRequired,
};

export default ReceiveForm;
