/**
 *
 * Input
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Input as InputHTML } from './styles';

function Input(props) {
  return <InputHTML {...props} />;
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
