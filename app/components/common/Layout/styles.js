import styled from 'styled-components';
import { dark } from 'styles/colors';

const extensionWidth = '330px';

export const Layout = styled.div`
  width: ${extensionWidth};
  height: 600px;
  margin: 0 auto;
  background-color: ${dark};
  overflow-x: hidden;
  overflow-y: auto;
  color: white;
  display: inline-block;

  @media screen and (min-width: 768px) {
    margin: 20px calc((100% - ${extensionWidth}) / 2);
  }
`;
