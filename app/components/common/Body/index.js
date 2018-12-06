/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Body as BodyHTML } from './styles';

function Body(props) {
  return <BodyHTML>{props.children}</BodyHTML>;
}

Body.propTypes = {
  children: PropTypes.node,
};

export default Body;
