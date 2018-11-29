import styled from 'styled-components';
import { grey } from 'styles/colors';
import { small } from 'styles/fontSize';

export const Wrapper = styled.div`
  margin: 60px 0 20px 0;
`;

export const Title = styled.div`
  color: ${grey};
  width: 100%;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const NoTransactions = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${small};
  color: ${grey};
  font-weight: bold;
  margin-top: 10px;
`;

export const Transaction = styled.div`
  > div {
    background-color: black;
  }
  border: 1px solid ${grey};
`;

export const TransId = styled.span`
    width; 100%;
`;

export const Confirmed = styled.div``;

export const Amount = styled.div`
  width: 100%;
  text-align: center;
`;
