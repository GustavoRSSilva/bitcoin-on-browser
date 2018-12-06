import styled from 'styled-components';
import { btcOrange } from 'styles/colors';
import { large } from 'styles/fontSize';
import { headerHeight } from 'styles/app';

export const Header = styled.header`
  width: 100%;
  height: ${headerHeight};
  border-bottom: 1px solid ${btcOrange};
  font-size: ${large};
  text-transform: uppercase;
  font-weight: bold;
  line-height: 50px;
  display: flex;

  > img {
    width: 30px;
    height: auto;
    margin: 10px;
  }
`;
