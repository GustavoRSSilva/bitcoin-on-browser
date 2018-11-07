import styled from 'styled-components';

import { white, primaryButton, primaryButtonHover } from 'styles/colors';
import { large } from 'styles/fontSize';

export const Button = styled.button`
  width: 60%;
  margin: 0 20%;
  text-transform: uppercase;
  color: ${white};
  font-weight: bold;
  padding: 10px 0;
  border-radius: 5px;
  margin-top: 30px;
  background-color: ${primaryButton};
  letter-spacing: 1px;
  font-size: ${large};

  &:hover {
    cursor: pointer;
    background-color: ${primaryButtonHover};
  }
`;
