/**
 *
 * ReceiveAndSendLinks
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import { Wrapper, LinkContainer } from './styles';

function ReceiveAndSendLinks() {
  return (
    <Wrapper>
      <LinkContainer to="/receive">
        <FormattedMessage {...messages.receive} />
      </LinkContainer>
      <LinkContainer to="/send">
        <FormattedMessage {...messages.send} />
      </LinkContainer>
    </Wrapper>
  );
}

export default ReceiveAndSendLinks;
