/**
 *
 * QRCode
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Wrapper, Img, AddressContainer } from './styles';

const renderAddress = (address, displayAddress) => {
  if (!displayAddress || !address) {
    return null;
  }

  return (
    <AddressContainer>
      <CopyToClipboard text={address}>
        <span>{address}</span>
      </CopyToClipboard>
    </AddressContainer>
  );
};

function QRCode(props) {
  const { src, alt, address, displayAddress } = props;
  return (
    <Wrapper>
      <Img key={src} src={src} alt={alt} />
      {renderAddress(address, displayAddress)}
    </Wrapper>
  );
}

QRCode.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  address: PropTypes.string,
  displayAddress: PropTypes.bool,
};

export default QRCode;
