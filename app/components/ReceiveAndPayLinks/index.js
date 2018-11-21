/**
 *
 * ReceiveAndPayLinks
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import { Wrapper, LinkContainer } from './styles';

function ReceiveAndPayLinks() {
  return (
    <Wrapper>
      <LinkContainer>
        <Link to="/receive">
          <FormattedMessage {...messages.receive} />
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link to="/send">
          <FormattedMessage {...messages.send} />
        </Link>
      </LinkContainer>
    </Wrapper>
  );
}

export default ReceiveAndPayLinks;
