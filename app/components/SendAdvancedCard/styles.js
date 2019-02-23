import styled from 'styled-components';
import { blue, darkBlue } from 'styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const ShowButtonContainer = styled.div`
  width: 100%;
  text-align: center;

  button {
    text-transform: uppercase;
    color: ${blue};

    &:hover {
      color: ${darkBlue};
      cursor: pointer;
    }
  }
`;

export const ShowContainer = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  max-height: ${props => (props.show ? '600px' : '0')};
  height: auto;
`;
