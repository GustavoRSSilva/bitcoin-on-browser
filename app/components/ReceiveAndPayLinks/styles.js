import styled from 'styled-components';
import { primaryButton, primaryButtonHover } from 'styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const LinkContainer = styled.div`
  border-radius: 5px;
  color: ${primaryButton};
  border: 1px solid ${primaryButton};
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    color: ${primaryButtonHover};
    border: 1px solid ${primaryButtonHover};
  }

  span {
    padding: 10px 20px;
  }
`;
