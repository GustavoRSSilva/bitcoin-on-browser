/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
  width: 330px;
  height: 600px;
  padding: 20px;
  margin: 0 auto;
`;

function Layout(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
