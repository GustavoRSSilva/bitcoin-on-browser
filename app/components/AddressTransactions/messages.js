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
  no_transactions_found: {
    id: 'app.components.AddressTransactions.no_transactions_found',
    defaultMessage: 'No transactions found!',
  },
  fee: {
    id: 'app.components.AddressTransactions.fee',
    defaultMessage: 'Fee:',
  },
  size: {
    id: 'app.components.AddressTransactions.size',
    defaultMessage: 'Size:',
  },
  block_hash: {
    id: 'app.components.AddressTransactions.block_hash',
    defaultMessage: 'Block hash:',
  },
  block_height: {
    id: 'app.components.AddressTransactions.block_height',
    defaultMessage: 'Block height:',
  },
  transaction_id: {
    id: 'app.components.AddressTransactions.transaction_id',
    defaultMessage: 'Transaction id:',
  },
  transaction_weight: {
    id: 'app.components.AddressTransactions.transaction_weight',
    defaultMessage: 'Transaction weight:',
  },
  view_on_blockstream: {
    id: 'app.components.AddressTransactions.view_on_blockstream',
    defaultMessage: 'View on Blockstream',
  },
});
