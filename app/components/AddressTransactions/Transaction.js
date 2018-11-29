/**
 *
 * Transaction
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import { BLOCKSTREAM_URL, MAINNET } from 'utils/constants';
import { transSatToUnit, getFiatAmountFromCrypto } from 'utils/conversion';

import { calculateTransactionAddressRecieved } from 'utils/transactions';

import { Transaction as Wrapper, TransId, Confirmed } from './styles';

import messages from './messages';

const getExplorerUrl = (txId, networkId) =>
  networkId === MAINNET
    ? `${BLOCKSTREAM_URL}tx/${txId}`
    : `${BLOCKSTREAM_URL}testnet/tx/${txId}`;

function Transaction(props) {
  const {
    expanded,
    onClick,
    transaction,
    btcToFiat,
    address,
    networkId,
  } = props;
  const { confirmed = false } = transaction.status;
  const txId = transaction.txid;
  const minTxId = `${txId.slice(0, 9)}...${txId.slice(-9)}`;
  const rateFloat = btcToFiat ? btcToFiat.rate_float : 0;

  const { amount, unit } = transSatToUnit(
    calculateTransactionAddressRecieved(transaction, address),
  );
  const valueFiat = getFiatAmountFromCrypto(amount, rateFloat, unit, networkId);

  return (
    <Wrapper title={txId}>
      <ExpansionPanel expanded={expanded} onChange={onClick}>
        <ExpansionPanelSummary>
          <TransId>{minTxId}</TransId>
          <Confirmed confirmed={confirmed}>
            {confirmed ? (
              <FormattedMessage {...messages.confirmed} />
            ) : (
              <FormattedMessage {...messages.pending} />
            )}
          </Confirmed>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p>{amount}</p>
          <p>{unit}</p>
          <p>{address}</p>
          <p>{valueFiat}</p>
          <p>{getExplorerUrl(txId, networkId)}</p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Wrapper>
  );
}

Transaction.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  transaction: PropTypes.object.isRequired,
  btcToFiat: PropTypes.object,
  address: PropTypes.string,
  networkId: PropTypes.string.isRequired,
};

export default Transaction;
