/**
 *
 * CloseButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import CloseButtonSVG from 'assets/img/close_button.svg';

import { Wrapper } from './styles';

function CloseButton(props) {
  const { onClick } = props;
  return (
    <Wrapper>
      <button onClick={onClick} onKeyDown={onClick}>
        <img src={CloseButtonSVG} alt="close_button" />
      </button>
    </Wrapper>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
