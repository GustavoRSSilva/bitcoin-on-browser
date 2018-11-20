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
  getFiatAmount,
} from 'utils/conversion';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Wrapper, Title, Balance, Delta, BalanceFiat } from './styles';

function AddressBalance(props) {
  const { balance, btcToFiat, networkId } = props;
  if (!balance || !btcToFiat) {
    return null;
  }

  const { unit } = transSatToUnit(balance.total_received);
  const mempoolBalance = convertSatsToUnit(balance.mempool_balance, unit);
  const confirmedBalance = convertSatsToUnit(balance.confirmed_balance, unit);

  const fiatCur = USD;
  const fiatAmount = getFiatAmount(
    confirmedBalance,
    btcToFiat.rate_float,
    unit,
    networkId,
  );

  const delta = mempoolBalance > 0;
  const balanceHTML = mempoolBalance ? (
    <span>
      {confirmedBalance}{' '}
      <Delta delta={delta}>
        {delta ? '+' : '-'} {Math.abs(mempoolBalance)}
      </Delta>
    </span>
  ) : (
    <span>{confirmedBalance}</span>
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
  networkId: PropTypes.string.isRequired,
};

export default AddressBalance;
