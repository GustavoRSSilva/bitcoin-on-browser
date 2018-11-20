/*
 * AddressTitle Messages
 *
 * This contains all the text for the AddressTitle component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.AddressTitle.header',
    defaultMessage: 'This is the AddressTitle component !',
  },
  active_address: {
    id: 'app.containers.AddressTitle.active_address',
    defaultMessage: 'Active address:',
  },
  copy_to_clipboard: {
    id: 'app.containers.AddressTitle.copy_to_clipboard',
    defaultMessage: 'Copy to clipboard',
  },
  active_network: {
    id: 'app.containers.AddressTitle.active_network',
    defaultMessage: 'Active network:',
  },
});
