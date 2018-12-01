/**
 *
 * Transaction
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Tooltip from '@material-ui/core/Tooltip';

import Launch from 'assets/img/launch.svg';

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
  ViewOnExplorer,
  DetailsLine,
} from './styles';

import messages from './messages';

const getExplorerUrl = (txId, networkId) =>
  networkId === MAINNET
    ? `${BLOCKSTREAM_URL}tx/${txId}`
    : `${BLOCKSTREAM_URL}testnet/tx/${txId}`;

function Transaction(props) {
  const {
    intl,
    expanded,
    onClick,
    transaction,
    btcToFiat,
    address,
    networkId,
  } = props;

  const { formatMessage } = intl;
  const { confirmed = false } = transaction.status;
  const txId = transaction.txid;
  const minTxId = `${txId.slice(0, 9)}...${txId.slice(-9)}`;
  const rateFloat = btcToFiat ? btcToFiat.rate_float : 0;

  const { amount, unit } = transSatToUnit(
    calculateTransactionAddressRecieved(transaction, address),
  );
  const valueFiat = getFiatAmountFromCrypto(amount, rateFloat, unit, networkId);
  const fiatUnit = USD;
  const { fee, size, weight } = transaction;

  const confirmMsg = confirmed ? (
    <FormattedMessage {...messages.confirmed} />
  ) : (
    <FormattedMessage {...messages.pending} />
  );
  const blockHash = transaction.status.block_hash;
  const blockHeight = transaction.status.block_height;

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
            <a href={getExplorerUrl(txId, networkId)} target="_blank">
              <Tooltip
                title={formatMessage(messages.view_on_blockstream)}
                placement="left"
              >
                <ViewOnExplorer>
                  <img src={Launch} alt="launch" />
                </ViewOnExplorer>
              </Tooltip>
            </a>

            <DetailsLine>
              <FormattedMessage {...messages.transaction_id} />{' '}
              <span>{txId}</span>
            </DetailsLine>
            <DetailsLine>
              <FormattedMessage {...messages.transaction_weight} />{' '}
              <span>{weight}</span>
            </DetailsLine>
            <DetailsLine>
              <FormattedMessage {...messages.fee} /> <span>{fee}</span>
            </DetailsLine>
            <DetailsLine>
              <FormattedMessage {...messages.size} /> <span>{size}</span>
            </DetailsLine>
            <DetailsLine>
              <FormattedMessage {...messages.block_hash} />{' '}
              <span>{blockHash}</span>
            </DetailsLine>
            <DetailsLine>
              <FormattedMessage {...messages.block_height} />{' '}
              <span>{blockHeight}</span>
            </DetailsLine>
          </TransactionDetails>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Wrapper>
  );
}

Transaction.propTypes = {
  intl: intlShape.isRequired,
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  transaction: PropTypes.object.isRequired,
  btcToFiat: PropTypes.object,
  address: PropTypes.string,
  networkId: PropTypes.string.isRequired,
};

export default injectIntl(Transaction);
