/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 330px;
  height: 600px;
  margin: auto;
`;

function Layout(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
