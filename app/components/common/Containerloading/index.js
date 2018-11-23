/**
 *
 * Containerloading
 *
 */

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Containerloading() {
  return (
    <div>
      <FormattedMessage {...messages.loading} />
    </div>
  );
}

Containerloading.propTypes = {};

export default Containerloading;
