/**
 *
 * Select
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, SelectStyled } from './styles';

function Select({ children, margin, value, onChange, border }) {
  return (
    <Wrapper margin={margin}>
      <SelectStyled value={value} onChange={onChange} border={border}>
        {children}
      </SelectStyled>
    </Wrapper>
  );
}

Select.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  margin: PropTypes.string,
  border: PropTypes.string,
};

export default Select;
