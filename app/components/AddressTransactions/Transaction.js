/**
 *
 * Transaction
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { BLOCKSTREAM_URL } from 'utils/constants';
// import {
//   transSatToUnit,
//   convertSatsToUnit,
//   convertFiatBtcToFiatUnit,
// } from 'utils/conversion';

import { Transaction as Wrapper, Fragment, TransId, Confirmed } from './styles';

import messages from './messages';

function Transaction(props) {
  const { transaction, btcToFiat, address } = props;
  const { confirmed = false } = transaction.status;
  const txId = transaction.txid;
  const minTxId = `${txId.slice(0, 9)}...${txId.slice(-9)}`;
  const rateFloat = btcToFiat ? btcToFiat.rate_float : 0;
  // TODO: calculate the amount I make or loss in this transaction
  // const { amount, unit } = transSatToUnit();
  // const valueFiat = convertFiatBtcToFiatUnit(rateFloat, unit);

  return (
    <Wrapper title={txId}>
      <a href={`${BLOCKSTREAM_URL}tx/${txId}`} target="_blank">
        <Fragment width="60%">
          <TransId>{minTxId}</TransId>
          <Confirmed confirmed={confirmed}>
            {confirmed ? (
              <FormattedMessage {...messages.confirmed} />
            ) : (
              <FormattedMessage {...messages.pending} />
            )}
          </Confirmed>
        </Fragment>
        <Fragment width="40%">
          {address}
          {rateFloat}
        </Fragment>
      </a>
    </Wrapper>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
  btcToFiat: PropTypes.object,
  address: PropTypes.string,
};

export default Transaction;
