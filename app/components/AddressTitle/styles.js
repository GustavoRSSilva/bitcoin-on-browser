import styled from 'styled-components';
import { btcOrange, grey } from 'styles/colors';
import { extraSmall } from 'styles/fontSize';

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${btcOrange};
  font-size: ${extraSmall};
  float: left;
`;

export const AddressFragment = styled.div`
  float: left;
  width: 240px;
  height: 40px;
  margin: 20px calc(50% - 120px);
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
  height: 40px;
  margin: 10px auto;
  border-radius: 5px;
  padding: 0 10px;

  > span {
    width: 100%;
    height: 15px;
    float: left;
    text-align: center;
    margin-top: 3px;
  }
`;

export const SelectFragment = styled.div`
  float: left;
  width: 100%;
  padding: 0 calc(50% - 100px);

  > select {
    width: 100%;
    height: 20px;
    border: 1px solid ${grey};
    text-indent: 10px;
  }
`;
