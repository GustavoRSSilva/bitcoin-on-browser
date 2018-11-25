import styled from 'styled-components';
import { grey } from 'styles/colors';
import { normal } from 'styles/fontSize';

export const Wrapper = styled.div`
  margin: ${props => props.margin || '30px 0'};
`;

export const SelectStyled = styled.select`
  font-size: ${normal};
  border: ${props => props.border || `1px solid ${grey}`};
  padding: 5px;
  color: ${grey};

  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;

  &:hover {
    cursor: pointer;
  }
`;
