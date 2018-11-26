/*
 * SendForm Messages
 *
 * This contains all the text for the SendForm component.
 */

import { defineMessages } from 'react-intl';
import { ADDRESS_TO, ADDRESS_FROM } from 'containers/Send/constants';

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
});