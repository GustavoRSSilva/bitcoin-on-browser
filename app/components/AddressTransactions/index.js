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
import { Title } from './styles';

function AddressTransactions(props) {
  const { transactions, btcToFiat, address } = props;

  if (!transactions.length) {
    return null;
  }

  return (
    <div>
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>
      {transactions.map(transaction => (
        <Transaction
          key={transaction.txid}
          transaction={transaction}
          btcToFiat={btcToFiat}
          address={address}
        />
      ))}
    </div>
  );
}

AddressTransactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  btcToFiat: PropTypes.object,
  address: PropTypes.string,
};

export default AddressTransactions;
