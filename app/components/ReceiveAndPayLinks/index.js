/**
 *
 * ReceiveAndPayLinks
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import { Wrapper } from './styles';

function ReceiveAndPayLinks() {
  return (
    <Wrapper>
      <Link to="/receive">
        <FormattedMessage {...messages.receive} />
      </Link>
      <Link to="/send">
        <FormattedMessage {...messages.send} />
      </Link>
    </Wrapper>
  );
}

export default ReceiveAndPayLinks;
