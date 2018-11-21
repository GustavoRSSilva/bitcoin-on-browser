import styled from 'styled-components';
import { small } from 'styles/fontSize';

export const Wrapper = styled.div`
  width: 100%;
  float: left;
  margin: 40px 0;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  margin: 0 calc(50% - 100px);
`;

export const AddressContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: center;

  > span {
    font-size: ${small};
    padding: 20px 10px;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;
