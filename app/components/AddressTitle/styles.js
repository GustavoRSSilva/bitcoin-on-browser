import styled from 'styled-components';
import { btcOrange } from 'styles/colors';
import { small } from 'styles/fontSize';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${btcOrange};
  font-size: ${small};
`;
