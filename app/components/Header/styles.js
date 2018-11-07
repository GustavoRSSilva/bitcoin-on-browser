import styled from 'styled-components';
import { btcOrange } from 'styles/colors';
import { big } from 'styles/fontSize';

export const Header = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${btcOrange};
  font-size: ${big};
  text-transform: uppercase;
  font-weight: bold;

  > img {
    width: 30px;
    height: auto;
    margin: 10px;
  }
`;
