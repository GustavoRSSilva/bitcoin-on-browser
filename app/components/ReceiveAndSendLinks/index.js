/**
 *
 * ReceiveAndSendLinks
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Button from 'components/common/Button';

import messages from './messages';
import { Wrapper } from './styles';

function ReceiveAndSendLinks() {
  return (
    <Wrapper>
      <Link to="/receive">
        <Button>
          <FormattedMessage {...messages.receive} />
        </Button>
      </Link>
      <Link to="/send">
        <Button>
          <FormattedMessage {...messages.send} />
        </Button>
      </Link>
    </Wrapper>
  );
}

export default ReceiveAndSendLinks;
