import styled from 'styled-components';
import { dark, white } from 'styles/colors';
import { appWidth, appHeight } from 'styles/app';

export const Layout = styled.div`
  width: ${appWidth};
  height: ${appHeight};
  margin: 0 auto;
  background-color: ${dark};
  color: ${white};
  display: inline-block;

  @media screen and (min-width: 768px) {
    margin: 20px calc((100% - ${appWidth}) / 2);
  }
`;
