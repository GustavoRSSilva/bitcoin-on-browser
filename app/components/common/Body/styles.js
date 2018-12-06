import styled from 'styled-components';
import { appHeight, headerHeight } from 'styles/app';

export const Body = styled.div`
  width: 100%;
  height: calc(${appHeight} - ${headerHeight});
  overflow: auto;
  display: inline-block;
`;
