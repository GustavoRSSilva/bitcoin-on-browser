/*
 * SendUtxosTable Messages
 *
 * This contains all the text for the SendUtxosTable component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.SendUtxosTable.header',
    defaultMessage: 'This is the SendUtxosTable component !',
  },
  utxos: {
    id: 'app.components.SendUtxosTable.utxos',
    defaultMessage: 'utxos',
  },
  tx_id: {
    id: 'app.components.SendUtxosTable.tx_id',
    defaultMessage: 'Transaction Id',
  },
  amount: {
    id: 'app.components.SendUtxosTable.amount',
    defaultMessage: 'Amount',
  },
  utxos_info: {
    id: 'app.components.SendUtxosTable.utxos_info',
    defaultMessage: 'Utxos table: Click on a row to enable or disable a utxo.',
  },
});
