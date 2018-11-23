import styled from 'styled-components';
import { extraLarge } from 'styles/fontSize';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
`;

export const PrimaryInputContainer = styled.div`
  width: 100%;
  margin: 15px 0;
  display: flex;
  flex-direction: columns;
`;

export const PrimaryInput = styled.input`
  width: 60%;
  margin: 0 5%;
  font-size: ${extraLarge};
  text-align: center;
  border-bottom: 1px solid white;
`;

export const PrimaryUnit = styled.div`
  width: 30%;
  text-align: left;
  position: relative;
  > select {
    position: absolute;
    bottom: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const SecondaryInputContainer = styled.div`
  width: 100%;
  margin: 15px 0;
  padding: 0 20%;
  display: flex;
  flex-direction: columns;
`;

export const SecondaryInput = styled.input`
  width: 60%;
  margin: 0 5%;
  text-align: center;
  border-bottom: 1px solid white;
`;

export const SecondaryUnit = styled.div`
  width: 30%;
  text-align: left;
  position: relative;
  > span {
    position: absolute;
    bottom: 0;
  }
`;
