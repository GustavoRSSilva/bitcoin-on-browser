/**
 *
 * SendAdvancedCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { transSatToUnit } from 'utils/conversion';

import appMessages from 'containers/App/messages';

import {
  Wrapper,
  ShowButtonContainer,
  ShowContainer,
  UtxosListTitle,
  Utxo,
  Amount,
} from './styles';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class SendAdvancedCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  renderUtxos() {
    const { utxos, address } = this.props;
    return [
      <UtxosListTitle key="utxo-title">
        <FormattedMessage {...messages.utxos} />
      </UtxosListTitle>,
      utxos.map(utxo => {
        const utxoTitle = `${utxo.txid.slice(0, 17)}...${utxo.txid.slice(
          -14,
        )}:${utxo.vout}`;
        const { amount, unit } = transSatToUnit(utxo.value, 4);
        return (
          <Utxo key={utxoTitle}>
            <span>{utxoTitle}</span>
            <div>
              <span>{`${address.slice(0, 6)}...${address.slice(-6)}`}</span>
              <Amount>
                {' '}
                {amount} <FormattedMessage {...appMessages[unit]} />
              </Amount>
            </div>
          </Utxo>
        );
      }),
    ];
  }

  render() {
    const { show } = this.state;

    return (
      <Wrapper>
        <ShowButtonContainer>
          <button
            onClick={() => this.setState({ show: !show })}
            onKeyDown={() => this.setState({ show: !show })}
          >
            <FormattedMessage {...messages.advanced} />
          </button>
        </ShowButtonContainer>
        <ShowContainer show={show}>{this.renderUtxos(show)}</ShowContainer>
      </Wrapper>
    );
  }
}

SendAdvancedCard.propTypes = {
  utxos: PropTypes.array.isRequired,
  address: PropTypes.string.isRequired,
};

export default SendAdvancedCard;
