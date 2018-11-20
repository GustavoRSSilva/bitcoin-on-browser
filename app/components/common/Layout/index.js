/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Layout as LayoutHTML } from './styles';

function Layout(props) {
  return <LayoutHTML>{props.children}</LayoutHTML>;
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
