import styled from 'styled-components';
import { grey } from 'styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 127px;
  display: inline-block;
`;

export const InputContainer = styled.div`
  width: 90%;
  margin: 15px 5%;
  position: relative;
`;

export const Unit = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8%;
  text-align: left;
  color: ${grey};
  > span {
    width: 55px;
    padding: 5px;
    float: left;
  }
`;
