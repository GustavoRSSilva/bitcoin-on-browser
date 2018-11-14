/**
 *
 * AddressBalance
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { USD } from 'utils/constants';
import {
  transSatToUnit,
  convertSatsToUnit,
  convertFiatBtcToFiatUnit,
} from 'utils/conversion';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Wrapper, Title, Balance, Delta, BalanceFiat } from './styles';

function AddressBalance(props) {
  const { balance, btcToFiat } = props;
  if (!balance || !btcToFiat) {
    return null;
  }

  const { amount: totalBalance, unit } = transSatToUnit(balance.total_received);
  const mempoolBalanceMBTC = convertSatsToUnit(balance.mempool_balance, unit);

  const fiatCur = USD;
  const value = convertFiatBtcToFiatUnit(btcToFiat.rate_float, unit);
  const fiatAmount = (totalBalance * value).toFixed(2);

  const delta = mempoolBalanceMBTC > 0;
  const balanceHTML = mempoolBalanceMBTC ? (
    <span>
      {totalBalance}{' '}
      <Delta delta={delta}>
        {delta ? '+' : '-'} {Math.abs(mempoolBalanceMBTC)}
      </Delta>
    </span>
  ) : (
    <span>{totalBalance}</span>
  );

  return (
    <Wrapper>
      <Title>
        <FormattedMessage {...messages.balance} />
      </Title>
      <Balance>
        {balanceHTML} <FormattedMessage {...messages[unit]} />
      </Balance>
      <BalanceFiat>
        {fiatAmount} <span>{fiatCur}</span>
      </BalanceFiat>
    </Wrapper>
  );
}

AddressBalance.propTypes = {
  balance: PropTypes.object,
  btcToFiat: PropTypes.object,
};

export default AddressBalance;
