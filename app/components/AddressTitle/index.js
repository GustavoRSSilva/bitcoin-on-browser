/**
 *
 * AddressTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Wrapper } from './styles';

import messages from './messages';

function AddressTitle(props) {
  const { address } = props;
  if (!address) {
    return null;
  }

  return (
    <Wrapper>
      <FormattedMessage {...messages.active_address} values={{ address }} />
    </Wrapper>
  );
}

AddressTitle.propTypes = {
  address: PropTypes.string,
};

export default AddressTitle;
