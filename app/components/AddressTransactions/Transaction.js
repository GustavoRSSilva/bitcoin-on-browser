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

import { BLOCKSTREAM_URL, MAINNET, USD } from 'utils/constants';
import { transSatToUnit, getFiatAmountFromCrypto } from 'utils/conversion';
import { calculateTransactionAddressRecieved } from 'utils/transactions';

import appMessages from 'containers/App/messages';

import {
  Transaction as Wrapper,
  SummaryContainer,
  SummaryLine,
  Confirmed,
  TransactionDetails,
} from './styles';

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
  const fiatUnit = USD;
  const { fee } = transaction;

  const confirmMsg = confirmed ? (
    <FormattedMessage {...messages.confirmed} />
  ) : (
    <FormattedMessage {...messages.pending} />
  );

  return (
    <Wrapper>
      <ExpansionPanel expanded={expanded} onChange={onClick}>
        <ExpansionPanelSummary>
          <SummaryContainer>
            <SummaryLine>
              <div>{minTxId}</div>
              <div>
                {amount} <FormattedMessage {...appMessages[unit]} />
              </div>
            </SummaryLine>
            <SummaryLine>
              <Confirmed confirmed={confirmed}>{confirmMsg}</Confirmed>
              <div>
                {valueFiat} <FormattedMessage {...appMessages[fiatUnit]} />
              </div>
            </SummaryLine>
          </SummaryContainer>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <TransactionDetails>
            <p>from: {address}</p>
            <p>fee {fee}</p>
            <p>{valueFiat}</p>
            <p>{getExplorerUrl(txId, networkId)}</p>
          </TransactionDetails>
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
