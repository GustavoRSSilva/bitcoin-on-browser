import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { grey } from 'styles/colors';

export const Wrapper = styled.div`
  margin: ${props => props.margin || '30px 0'};
`;

export const TextFieldStyled = styled(TextField)`
  fieldset,
  legend,
  input,
  div:before,
  div,
  div:after,
  label {
    color: ${grey} !important;
    border-color: ${grey} !important;
  }

  input {
    text-align: ${props => (props.centered ? 'center' : 'inherit')};
  }
`;
