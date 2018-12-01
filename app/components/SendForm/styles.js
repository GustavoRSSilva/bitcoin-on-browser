import styled from 'styled-components';
import { grey } from 'styles/colors';
import { extraSmall, small, normal } from 'styles/fontSize';

export const Form = styled.form`
  width: 100%;
  margin-top: 20px;
  height: 127px;
  display: inline-block;
`;

export const InputContainer = styled.div`
  width: 90%;
  margin: 15px 5%;
  position: relative;

  input {
    font-size: ${props => (props.type === 'address' ? small : normal)};
  }
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

export const NoteRequired = styled.div`
  width: 100%;
  width: 100%;
  padding: 0 5%;
  margin-bottom: 20px;
  color: ${grey};
  font-size: ${extraSmall};
`;
