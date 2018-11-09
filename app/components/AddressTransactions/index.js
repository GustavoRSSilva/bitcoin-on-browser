/**
 *
 * AddressTransactions
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import { BLOCKSTREAM_URL } from 'utils/constants';

import messages from './messages';

import { Title, Transaction, Fragment, TransId, Confirmed } from './styles';

function AddressTransactions(props) {
  const { transactions } = props;

  return (
    <div>
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>
      {transactions.map(transaction => {
        const { confirmed = false } = transaction.status;
        const txId = transaction.txid;
        const minTxId = `${txId.slice(0, 9)}...${txId.slice(-9)}`;

        return (
          <Transaction key={transaction.txid} title={txId}>
            <a href={`${BLOCKSTREAM_URL}tx/${txId}`} target="_blank">
              <Fragment width="60%">
                <TransId>{minTxId}</TransId>
                <Confirmed>
                  {' '}
                  {confirmed ? (
                    <FormattedMessage {...messages.confirmed} />
                  ) : (
                    <FormattedMessage {...messages.pending} />
                  )}
                </Confirmed>
              </Fragment>
              <Fragment width="40%" />
            </a>
          </Transaction>
        );
      })}
    </div>
  );
}

AddressTransactions.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default AddressTransactions;
