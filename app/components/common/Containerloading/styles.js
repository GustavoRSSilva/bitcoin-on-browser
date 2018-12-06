import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const LoaderContainer = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  z-index: 1;

  > span {
    margin-top: 50px;
    float: left;
    width: 100%;
    text-align: center;
    font-weight: bold;
  }
`;
