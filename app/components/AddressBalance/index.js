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
const convertBtcToMBtc = value => value * 10 ** 3;

function AddressBalance(props) {
  if (!props.balance) {
    return null;
  }

  const mempoolBalanceMBTC = convertSatoshiToMBtc(
    props.balance.mempool_balance,
  );
  const confirmedBalanceMBTC = convertSatoshiToMBtc(
    props.balance.confirmed_balance,
  );
  const totalBalanceMBTC = convertSatoshiToMBtc(props.balance.total_received);

  const fiatCur = USD;
  const mbtcValue = convertBtcToMBtc(6500);
  const fiatAmount = totalBalanceMBTC / mbtcValue;

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
};

export default AddressBalance;
