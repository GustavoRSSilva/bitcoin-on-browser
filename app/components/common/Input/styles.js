import styled from 'styled-components';
import { btcOrange, inputShadow } from 'styles/colors';

export const Input = styled.input`
  width: 100%;
  background-color: white;
  height: 35px;
  padding: 0 20px;
  border: 1px solid ${btcOrange};
  margin-top: 30px;
  box-shadow: 1px 0px 20px 10px ${inputShadow};
  border-radius: 5px;
`;
