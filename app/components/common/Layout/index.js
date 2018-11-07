/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { dark } from 'styles/colors';

import { onDesktop } from 'styles/mediaQueries';

const extensionWidth = '330px';

const Wrapper = styled.div`
  float: left;
  width: ${extensionWidth};
  height: 600px;
  margin: 0 auto;
  background-color: ${dark};
  overflow: hidden;
  color: white;

  ${onDesktop} {
    margin: 20px calc((100% - ${extensionWidth}) / 2);
  }
`;

function Layout(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
