/**
 *
 * Containerloading
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import CircularProgress from '@material-ui/core/CircularProgress';

import messages from './messages';
import { Wrapper, LoaderContainer } from './styles';

function Containerloading() {
  return (
    <Wrapper>
      <LoaderContainer>
        <CircularProgress
          size="100px"
          color="inherit"
          variant="indeterminate"
        />
        <FormattedMessage {...messages.loading} />
      </LoaderContainer>
    </Wrapper>
  );
}

Containerloading.propTypes = {};

export default Containerloading;
