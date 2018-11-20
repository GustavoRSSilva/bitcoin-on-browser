/**
 *
 * Transaction
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { BLOCKSTREAM_URL, MAINNET } from 'utils/constants';
import { transSatToUnit, getFiatAmount } from 'utils/conversion';

import { calculateTransactionAddressRecieved } from 'utils/transaction';

import {
  Transaction as Wrapper,
  Fragment,
  TransId,
  Confirmed,
  Amount,
} from './styles';

import messages from './messages';

const getExplorerUrl = (txId, networkId) =>
  networkId === MAINNET
    ? `${BLOCKSTREAM_URL}tx/${txId}`
    : `${BLOCKSTREAM_URL}testnet/tx/${txId}`;

function Transaction(props) {
  const { transaction, btcToFiat, address, networkId } = props;
  const { confirmed = false } = transaction.status;
  const txId = transaction.txid;
  const minTxId = `${txId.slice(0, 9)}...${txId.slice(-9)}`;
  const rateFloat = btcToFiat ? btcToFiat.rate_float : 0;

  const { amount, unit } = transSatToUnit(
    calculateTransactionAddressRecieved(transaction, address),
  );
  const valueFiat = getFiatAmount(amount, rateFloat, unit, networkId);

  return (
    <Wrapper title={txId}>
      <a href={getExplorerUrl(txId, networkId)} target="_blank">
        <Fragment width="60%">
          <TransId>{minTxId}</TransId>
          <Confirmed confirmed={confirmed}>
            {confirmed ? (
              <FormattedMessage {...messages.confirmed} />
            ) : (
              <FormattedMessage {...messages.pending} />
            )}
          </Confirmed>
        </Fragment>
        <Fragment width="40%">
          <Amount>
            {amount} {unit}
          </Amount>
          <Amount>{valueFiat} USD</Amount>
        </Fragment>
      </a>
    </Wrapper>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
  btcToFiat: PropTypes.object,
  address: PropTypes.string,
  networkId: PropTypes.string.isRequired,
};

export default Transaction;
