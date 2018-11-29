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

class AddressTransactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
    };

    this.handleOpenPanel = this.handleOpenPanel.bind(this);
  }

  handleOpenPanel = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  renderTransactions(transactions = [], btcToFiat, address, networkId) {
    if (!transactions.length) {
      return (
        <NoTransactions>
          <FormattedMessage {...messages.no_transactions_found} />
        </NoTransactions>
      );
    }
    const { expanded } = this.state;

    return transactions.map((transaction, index) => (
      <Transaction
        expanded={expanded === `panel${index}`}
        onClick={this.handleOpenPanel(`panel${index}`)}
        key={transaction.txid}
        transaction={transaction}
        btcToFiat={btcToFiat}
        address={address}
        networkId={networkId}
      />
    ));
  }

  render() {
    const { transactions, btcToFiat, address, networkId } = this.props;

    return (
      <Wrapper>
        <Title>
          <FormattedMessage {...messages.header} />
        </Title>
        {this.renderTransactions(transactions, btcToFiat, address, networkId)}
      </Wrapper>
    );
  }
}

AddressTransactions.propTypes = {
  networkId: PropTypes.string.isRequired,
  transactions: PropTypes.array.isRequired,
  btcToFiat: PropTypes.object,
  address: PropTypes.string,
};

export default AddressTransactions;
