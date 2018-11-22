import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 20px;
  padding: 0 20px;

  > button {
    float: right;
    width: 20px;
    height: auto;
    padding: 0;

    &:hover {
      cursor: pointer;
    }

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;
