/**
 *
 * SendAdvancedCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import SendUtxosTable from 'components/SendUtxosTable';

import { Wrapper, ShowButtonContainer, ShowContainer } from './styles';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class SendAdvancedCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  renderUtxosTable() {
    const { utxos } = this.props;
    return <SendUtxosTable utxos={utxos} />;
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
        <ShowContainer show={show}>{this.renderUtxosTable(show)}</ShowContainer>
      </Wrapper>
    );
  }
}

SendAdvancedCard.propTypes = {
  utxos: PropTypes.array.isRequired,
};

export default SendAdvancedCard;
