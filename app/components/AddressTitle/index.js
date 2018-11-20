/**
 *
 * AddressTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Wrapper, AddressFragment, NetworkFragment } from './styles';

import messages from './messages';

function AddressTitle(props) {
  const { address, networkId } = props;

  if (!address) {
    return null;
  }

  const { formatMessage } = props.intl;
  return (
    <Wrapper>
      <NetworkFragment>
        <FormattedMessage {...messages.active_network} />
        <span>{networkId}</span>
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
};

export default injectIntl(AddressTitle);
