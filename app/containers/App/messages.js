/*
 * App Messages
 *
 * This contains all the common text used in the project.
 * the messages here are used in multiple components.
 */

import { defineMessages } from 'react-intl';
import { BTC, MBTC, SAT, USD, EUR } from 'utils/constants';

export default defineMessages({
  [BTC]: {
    id: 'app.components.AddressBalance.btc',
    defaultMessage: 'BTC',
  },
  [MBTC]: {
    id: 'app.components.AddressBalance.mbtc',
    defaultMessage: 'mBTC',
  },
  [SAT]: {
    id: 'app.components.AddressBalance.sat',
    defaultMessage: 'SAT',
  },
  [USD]: {
    id: 'app.containers.Receive.usd',
    defaultMessage: 'USD',
  },
  [EUR]: {
    id: 'app.containers.Receive.usd',
    defaultMessage: 'EUR',
  },
});
