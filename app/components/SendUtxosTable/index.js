/**
 *
 * SendUtxosTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { transSatToUnit } from 'utils/conversion';

import appMessages from 'containers/App/messages';

import { Wrapper, UtxosListTitle, Utxo, Amount } from './styles';
import messages from './messages';

function SendUtxosTable(props) {
  const { utxos } = props;

  return (
    <Wrapper>
      <UtxosListTitle>
        <FormattedMessage {...messages.utxos} />
      </UtxosListTitle>
      {utxos.map(utxo => {
        const utxoTitle = `${utxo.txid.slice(0, 17)}...${utxo.txid.slice(
          -14,
        )}:${utxo.vout}`;
        const { address } = utxo;
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
      })}
    </Wrapper>
  );
}

SendUtxosTable.propTypes = {
  utxos: PropTypes.array,
};

export default SendUtxosTable;
