import styled from 'styled-components';
import { dark } from 'styles/colors';

const extensionWidth = '330px';

export const Layout = styled.div`
  width: ${extensionWidth};
  height: 600px;
  margin: 0 auto;
  background-color: ${dark};
  overflow: hidden;
  color: white;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin: 20px calc((100% - ${extensionWidth}) / 2);
  }
`;
