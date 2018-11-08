/**
 *
 * AddressBalance
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { USD } from 'utils/constants';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { Wrapper, Title, Balance, Delta, BalanceFiat } from './styles';

const convertSatoshiToMBtc = value => value / 10 ** 5;
const convertUsdBtcToUsdMBtc = value => value / 10 ** 3;

function AddressBalance(props) {
  const { balance, btcToFiat } = props;
  if (!balance || !btcToFiat) {
    return null;
  }

  const mempoolBalanceMBTC = convertSatoshiToMBtc(balance.mempool_balance);
  const confirmedBalanceMBTC = convertSatoshiToMBtc(balance.confirmed_balance);
  const totalBalanceMBTC = convertSatoshiToMBtc(balance.total_received);

  const fiatCur = USD;
  const mbtcValue = convertUsdBtcToUsdMBtc(btcToFiat.rate_float);
  const fiatAmount = totalBalanceMBTC * mbtcValue;

  const delta = mempoolBalanceMBTC > 0;
  const balanceHTML = mempoolBalanceMBTC ? (
    <span>
      {confirmedBalanceMBTC}{' '}
      <Delta delta={delta}>
        {delta ? '+' : '-'} {Math.abs(mempoolBalanceMBTC)}
      </Delta>
    </span>
  ) : (
    <span>{confirmedBalanceMBTC}</span>
  );

  return (
    <Wrapper>
      <Title>
        <FormattedMessage {...messages.balance} />
      </Title>
      <Balance>
        {balanceHTML} <FormattedMessage {...messages.mili_bitcoin} />
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
