/**
 *
 * TextField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, TextFieldStyled } from './styles';

function TextField({
  value,
  onChange,
  variant,
  placeholder,
  label,
  margin,
  type,
  pattern,
  textAlign,
}) {
  return (
    <Wrapper margin={margin}>
      <TextFieldStyled
        value={value}
        onChange={onChange}
        variant={variant || 'outlined'}
        placeholder={placeholder}
        label={label || placeholder}
        fullWidth
        type={type}
        pattern={pattern}
        textAlign={textAlign}
      />
    </Wrapper>
  );
}

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  margin: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  textAlign: PropTypes.string,
};

export default TextField;
