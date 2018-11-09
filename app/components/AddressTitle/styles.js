import styled from 'styled-components';
import { btcOrange } from 'styles/colors';
import { extraSmall } from 'styles/fontSize';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${btcOrange};
  font-size: ${extraSmall};
  float: left;
`;

export const AddressFragment = styled.div`
  height: 36px;
  max-width: 240px;
  margin: 7px auto;
  border-radius: 5px;
  padding: 0 10px;

  > span {
    width: 100%;
    height: 15px;
    float: left;
    text-align: center;
    margin-top: 3px;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
