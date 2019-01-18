/*
 * SendForm Messages
 *
 * This contains all the text for the SendForm component.
 */

import { defineMessages } from 'react-intl';
import { ADDRESS_TO, ADDRESS_FROM, FEE } from 'containers/Send/constants';

export default defineMessages({
  header: {
    id: 'app.components.SendForm.header',
    defaultMessage: 'This is the SendForm component !',
  },
  [ADDRESS_FROM]: {
    id: 'app.components.SendForm.address_from',
    defaultMessage: 'From',
  },
  [ADDRESS_TO]: {
    id: 'app.components.SendForm.address_to',
    defaultMessage: 'To',
  },
  [FEE]: {
    id: 'app.components.SendForm.fee',
    defaultMessage: 'Fee (SAT)',
  },
  required: {
    id: 'app.components.SendForm.required',
    defaultMessage: '* Required fields',
  },
  submit: {
    id: 'app.components.SendForm.submit',
    defaultMessage: 'Submit',
  },
  insufficient_funds: {
    id: 'app.components.SendForm.insufficient_funds',
    defaultMessage: 'Insufficient funds',
  },
});
