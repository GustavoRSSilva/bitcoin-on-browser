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
import { Wrapper, Title, NoTransactions } from './styles';

const renderTransactions = (
  transactions = [],
  btcToFiat,
  address,
  networkId,
) => {
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
      networkId={networkId}
    />
  ));
};

function AddressTransactions(props) {
  const { transactions, btcToFiat, address, networkId } = props;

  return (
    <Wrapper>
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>
      {renderTransactions(transactions, btcToFiat, address, networkId)}
    </Wrapper>
  );
}

AddressTransactions.propTypes = {
  networkId: PropTypes.string.isRequired,
  transactions: PropTypes.array.isRequired,
  btcToFiat: PropTypes.object,
  address: PropTypes.string,
};

export default AddressTransactions;
