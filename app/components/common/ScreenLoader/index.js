/**
 *
 * ScreenLoader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import { Wrapper, LoaderContainer } from './styles';

function ScreenLoader({ children }) {
  return (
    <Wrapper>
      <LoaderContainer>
        <CircularProgress
          size="200px"
          color="inherit"
          variant="indeterminate"
        />
      </LoaderContainer>
      {children}
    </Wrapper>
  );
}

ScreenLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenLoader;
