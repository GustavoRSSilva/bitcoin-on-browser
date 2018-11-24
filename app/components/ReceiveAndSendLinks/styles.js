import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { primaryButton, primaryButtonHover } from 'styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const LinkContainer = styled(Link)`
  border-radius: 5px;
  width: 120px;
  background-color: ${primaryButton};
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 20px;
  text-align: center;

  &:hover {
    background-color: ${primaryButtonHover};
  }
`;
