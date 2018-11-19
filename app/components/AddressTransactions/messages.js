/*
 * AddressTransactions Messages
 *
 * This contains all the text for the AddressTransactions component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.AddressTransactions.header',
    defaultMessage: 'Transactions',
  },
  transaction_title: {
    id: 'app.components.AddressTransactions.transaction_title',
    defaultMessage: '#{numTx}',
  },
  confirmed: {
    id: 'app.components.AddressTransactions.confirmed',
    defaultMessage: 'confirmed',
  },
  pending: {
    id: 'app.components.AddressTransactions.pending',
    defaultMessage: 'pending',
  },
});
