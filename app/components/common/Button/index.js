/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ButtonStyled } from './styles';

function Button({ children, onClick, color, variant, type }) {
  return (
    <Wrapper>
      <ButtonStyled
        type={type}
        onClick={onClick}
        color={color || 'primary'}
        variant={variant || 'contained'}
        fullWidth
      >
        {children}
      </ButtonStyled>
    </Wrapper>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  color: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
