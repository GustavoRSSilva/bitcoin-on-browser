/**
 *
 * SendUtxosTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

import { transSatToUnit } from 'utils/conversion';

import { Wrapper } from './styles';
import messages from './messages';

function SendUtxosTable(props) {
  const { utxos } = props;

  return (
    <Wrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell padding="none">
              <FormattedMessage {...messages.tx_id} />
            </TableCell>
            <TableCell numeric>
              <FormattedMessage {...messages.amount} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {utxos.map(utxo => {
            const utxoTitle = `${utxo.txid.slice(0, 8)}...${utxo.txid.slice(
              -8,
            )}:${utxo.vout}`;
            const isSelected = utxo.enabled;
            const { amount, unit } = transSatToUnit(utxo.value, 4);
            return (
              <TableRow
                hover
                onClick={() => null}
                role="checkbox"
                key={utxoTitle}
                selected={isSelected}
                padding="none"
              >
                <TableCell padding="checkbox">
                  <Checkbox checked={isSelected} />
                </TableCell>
                <TableCell padding="none">{utxoTitle}</TableCell>
                <TableCell numeric>
                  {amount} {unit}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Wrapper>
  );
}

SendUtxosTable.propTypes = {
  utxos: PropTypes.array,
};

export default SendUtxosTable;
