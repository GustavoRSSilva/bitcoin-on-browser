/**
 *
 * Header
 *
 */

import React from 'react';

import BitcoinLogo from 'assets/img/bitcoin.svg';

import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { Header as HeaderHTML } from './styles';

function Header() {
  return (
    <HeaderHTML>
      <img src={BitcoinLogo} alt="bob logo" />
      <FormattedMessage {...messages.app_title} />
    </HeaderHTML>
  );
}

Header.propTypes = {};

export default Header;
