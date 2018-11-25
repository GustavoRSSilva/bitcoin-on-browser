/**
 *
 * TextField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, TextFieldStyled } from './styles';

function TextField({ value, onChange, placeholder, label, margin }) {
  return (
    <Wrapper margin={margin}>
      <TextFieldStyled
        label={label || placeholder}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        fullWidth
        variant="outlined"
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
};

export default TextField;
