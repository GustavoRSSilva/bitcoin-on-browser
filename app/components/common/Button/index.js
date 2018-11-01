/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonHTML } from './styles';

function Button(props) {
  return <ButtonHTML onClick={props.onClick}>{props.children}</ButtonHTML>;
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
