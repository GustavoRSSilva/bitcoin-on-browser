import styled from 'styled-components';
import { large } from 'styles/fontSize';
import {
  primaryButton,
  primaryButtonHover,
  grey,
  // steelGrey,
  lightBlue,
} from 'styles/colors';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const ShowButtonContainer = styled.div`
  width: 100%;
  text-align: center;

  > button {
    padding: 0;
    color: ${primaryButton};

    &:hover {
      cursor: pointer;
      color: ${primaryButtonHover};
    }
  }
`;

export const ShowContainer = styled.div`
  overflow: hidden;
  transition: max-height 0.3s ease-out; // note that we're transitioning max-height, not height!
  max-height: ${props => (props.show ? '600px' : '0')};
  height: auto;
`;

export const UtxosListTitle = styled.div`
  color: ${grey};
  margin-top: 20px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Utxo = styled.div`
  width: calc(100% - 6px);
  height: 80px;
  border: 1px solid ${grey};
  border-radius: 5px;
  margin: 5px 3px;
  margin-top: 10px;
  color: ${grey};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  /* &:hover {
    cursor: pointer;
    background-color: steelGrey;
  } */

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    > span {
      width: 50%;
      overflow: hidden;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }
  }
`;

export const Amount = styled.span`
  font-size: ${large};
  font-weight: bold;
  color: ${lightBlue};
`;