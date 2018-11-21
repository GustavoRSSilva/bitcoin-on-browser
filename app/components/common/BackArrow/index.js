/**
 *
 * BackArrow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { Wrapper } from './styles';
import messages from './messages';

function BackArrow(props) {
  const { to, target } = props;
  const message = messages[target] ? messages[target] : messages.return;
  return (
    <Wrapper>
      <Link to={to}>
        <FormattedMessage {...message} />
      </Link>
    </Wrapper>
  );
}

BackArrow.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

export default BackArrow;
