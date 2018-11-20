import styled from 'styled-components';
import { dark } from 'styles/colors';

const extensionWidth = '330px';

export const Layout = styled.div`
  float: left;
  width: ${extensionWidth};
  height: 600px;
  margin: 0 auto;
  background-color: ${dark};
  overflow: hidden;
  color: white;

  @media screen and (min-width: 768px) {
    margin: 20px calc((100% - ${extensionWidth}) / 2);
  }
`;
