/**
 *
 * AddressTransactions
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import Transaction from './Transaction';
import { Title, NoTransactions } from './styles';

const renderTransactions = (transactions = [], btcToFiat, address) => {
  if (!transactions.length) {
    return (
      <NoTransactions>
        <FormattedMessage {...messages.no_transactions_found} />
      </NoTransactions>
    );
  }

  return transactions.map(transaction => (
    <Transaction
      key={transaction.txid}
      transaction={transaction}
      btcToFiat={btcToFiat}
      address={address}
    />
  ));
};

function AddressTransactions(props) {
  const { transactions, btcToFiat, address } = props;

  return (
    <div>
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>
      {renderTransactions(transactions, btcToFiat, address)}
    </div>
  );
}

AddressTransactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  btcToFiat: PropTypes.object,
  address: PropTypes.string,
};

export default AddressTransactions;
