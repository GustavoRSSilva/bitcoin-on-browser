import styled from 'styled-components';
import { btcOrange } from 'styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const LoaderContainer = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  color: ${btcOrange};
  z-index: 1;
`;
