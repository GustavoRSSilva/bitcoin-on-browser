/**
 *
 * NotSupportedPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';

import messages from './messages';

function NotSupportedPage() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Bitcoin on browser"
        defaultTitle="Bitcoin on browser"
      >
        <meta name="description" content="A Bitcoin on browser" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

NotSupportedPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(NotSupportedPage);
