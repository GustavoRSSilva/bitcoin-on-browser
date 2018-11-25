/**
 *
 * TextField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, TextFieldStyled } from './styles';

function TextField({ value, onChange, placeholder, label, margin, type }) {
  return (
    <Wrapper margin={margin}>
      <TextFieldStyled
        label={label || placeholder}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth
        variant="outlined"
        type={type}
      />
    </Wrapper>
  );
}

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  margin: PropTypes.string,
  type: PropTypes.string,
};

export default TextField;
