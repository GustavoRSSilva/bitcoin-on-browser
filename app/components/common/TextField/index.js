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
  onFocus,
  disable,
  required,
  multiline,
  error,
  rows,
  rowsMax,
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
        centered={variant === 'standard' ? 'true' : null}
        onFocus={onFocus}
        disable={disable ? 'true' : 'false'}
        required={required || false}
        multiline={multiline || false}
        error={error || false}
        rows={rows}
        rowsMax={rowsMax}
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
  onFocus: PropTypes.func,
  disable: PropTypes.bool,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  error: PropTypes.bool,
  rows: PropTypes.string,
  rowsMax: PropTypes.string,
};

export default TextField;
