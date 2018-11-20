/**
 *
 * AddressTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { AVAILABLE_NETWORKS } from 'utils/constants';
import {
  Wrapper,
  AddressFragment,
  NetworkFragment,
  SelectFragment,
} from './styles';

import messages from './messages';

function AddressTitle(props) {
  const { address, networkId, handleChangeNetwork } = props;

  if (!address) {
    return null;
  }

  const { formatMessage } = props.intl;

  return (
    <Wrapper>
      <NetworkFragment>
        <FormattedMessage {...messages.active_network} />
        <SelectFragment>
          <select value={networkId} onChange={handleChangeNetwork}>
            {AVAILABLE_NETWORKS.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </SelectFragment>
      </NetworkFragment>
      <CopyToClipboard text={address}>
        <AddressFragment title={formatMessage(messages.copy_to_clipboard)}>
          <FormattedMessage {...messages.active_address} />
          <span>{address}</span>
        </AddressFragment>
      </CopyToClipboard>
    </Wrapper>
  );
}

AddressTitle.propTypes = {
  intl: intlShape.isRequired,
  address: PropTypes.string,
  networkId: PropTypes.string.isRequired,
  handleChangeNetwork: PropTypes.func.isRequired,
};

export default injectIntl(AddressTitle);
