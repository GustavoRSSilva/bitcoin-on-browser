/**
 *
 * QRCode
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Tooltip from '@material-ui/core/Tooltip';

import messages from './messages';
import { Wrapper, Img, AddressContainer } from './styles';

const renderAddress = (address, displayAddress, intl) => {
  if (!displayAddress || !address) {
    return null;
  }

  const { formatMessage } = intl;

  return (
    <Tooltip title={formatMessage(messages.copy_to_clipboard)}>
      <CopyToClipboard text={address}>
        <AddressContainer>
          <span>{address}</span>
        </AddressContainer>
      </CopyToClipboard>
    </Tooltip>
  );
};

function QRCode(props) {
  const { src, alt, address, displayAddress, intl } = props;
  return (
    <Wrapper>
      <Img key={src} src={src} alt={alt} />
      {renderAddress(address, displayAddress, intl)}
    </Wrapper>
  );
}

QRCode.propTypes = {
  intl: intlShape.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  address: PropTypes.string,
  displayAddress: PropTypes.bool,
};

export default injectIntl(QRCode);
