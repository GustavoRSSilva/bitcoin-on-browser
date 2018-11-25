import styled from 'styled-components';
import { btcOrange } from 'styles/colors';
import { extraSmall } from 'styles/fontSize';

export const Wrapper = styled.div`
  width: 100%;
  height: 140px;
  border-bottom: 1px solid ${btcOrange};
  font-size: ${extraSmall};
`;

export const AddressFragment = styled.div`
  float: left;
  width: 240px;
  height: 40px;
  margin: 10px calc(50% - 120px);
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

export const NetworkFragment = styled.div`
  float: left;
  width: 100%;
  height: 60px;
  margin: 10px auto;
  border-radius: 5px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    width: 100%;
    height: 15px;
    float: left;
    text-align: center;
    margin-top: 3px;
  }
`;

export const SelectFragment = styled.div`
  width: 100%;
  text-align: center;
`;
