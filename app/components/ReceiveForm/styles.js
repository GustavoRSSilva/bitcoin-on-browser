import styled from 'styled-components';
import { extraLarge, small } from 'styles/fontSize';
import { grey } from 'styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  height: 127px;
  padding: 0 15px;
  margin-top: 30px;
  position: relative;
`;

export const PrimaryInputContainer = styled.div`
  width: 90%;
  margin: 0 5%;
  position: relative;
  height: 55px;
  input {
    font-size: ${extraLarge};
  }
`;

export const PrimaryUnit = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-60%);
  font-size: ${small};
`;

export const SecondaryInputContainer = styled.div`
  width: 60%;
  margin: 0 20%;
  position: relative;
  > input {
    font-size: ${extraLarge};
  }
`;

export const SecondaryUnit = styled.div`
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-60%);
  font-size: ${small};
  color: ${grey};
`;
