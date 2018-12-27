/**
 *
 * SendUtxosTable
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

import InformationSVG from 'assets/img/information.svg';

import appMessages from 'containers/App/messages';

import { transSatToUnit } from 'utils/conversion';

import { Wrapper, TooltipImg } from './styles';
import messages from './messages';

function SendUtxosTable(props) {
  const {
    utxos,
    intl: { formatMessage },
    toggleUtxo,
  } = props;

  return (
    <Wrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Tooltip title={formatMessage(messages.utxos_info)}>
                <TooltipImg src={InformationSVG} />
              </Tooltip>
            </TableCell>
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
                onClick={evt => toggleUtxo(evt, utxo.txid)}
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
                  {amount} {formatMessage(appMessages[unit])}
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
  intl: intlShape.isRequired,
  toggleUtxo: PropTypes.func.isRequired,
  utxos: PropTypes.array,
};

export default injectIntl(SendUtxosTable);
