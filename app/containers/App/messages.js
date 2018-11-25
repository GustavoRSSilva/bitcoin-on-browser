/*
 * App Messages
 *
 * This contains all the common text used in the project.
 * the messages here are used in multiple components.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  btc: {
    id: 'app.components.AddressBalance.btc',
    defaultMessage: 'BTC',
  },
  mbtc: {
    id: 'app.components.AddressBalance.mbtc',
    defaultMessage: 'mBTC',
  },
  sat: {
    id: 'app.components.AddressBalance.sat',
    defaultMessage: 'SAT',
  },
  usd: {
    id: 'app.containers.Receive.usd',
    defaultMessage: 'USD',
  },
});
