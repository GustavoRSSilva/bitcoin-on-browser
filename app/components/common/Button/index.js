/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonHTML } from './styles';

function Button(props) {
  return <ButtonHTML>{props.children}</ButtonHTML>;
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
