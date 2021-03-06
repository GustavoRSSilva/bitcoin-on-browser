/**
 *
 * AddressBalance
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import appMessages from 'containers/App/messages';

import { USD, SAT, TESTNET } from 'utils/constants';
import {
  transSatToUnit,
  convertCryptoFromUnitToUnit,
  getFiatAmountFromCrypto,
} from 'utils/conversion';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Loading from './Loading';

import { Wrapper, Title, Balance, Delta, BalanceFiat } from './styles';

function AddressBalance(props) {
  const { balance, btcToFiat, networkId } = props;
  if (!balance || !btcToFiat) {
    return <Loading />;
  }

  const { unit } = transSatToUnit(balance.total_received, 4);

  //  the value are in SAT, we need to convert them to the used unit with 4 decimals places
  const mempoolBalance = convertCryptoFromUnitToUnit(
    balance.mempool_balance,
    SAT,
    unit,
    4,
  );
  const confirmedBalance = convertCryptoFromUnitToUnit(
    balance.confirmed_balance,
    SAT,
    unit,
    4,
  );

  const fiatAmount = getFiatAmountFromCrypto(
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
        {balanceHTML} <FormattedMessage {...appMessages[unit]} />
      </Balance>
      {(() => {
        if (networkId === TESTNET) {
          return null;
        }

        return (
          <BalanceFiat>
            {fiatAmount} <FormattedMessage {...appMessages[USD]} />
          </BalanceFiat>
        );
      })()}
    </Wrapper>
  );
}

AddressBalance.propTypes = {
  networkId: PropTypes.string.isRequired,
  balance: PropTypes.object,
  btcToFiat: PropTypes.object,
};

export default AddressBalance;
