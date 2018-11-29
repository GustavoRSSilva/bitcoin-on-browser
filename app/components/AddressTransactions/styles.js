import styled from 'styled-components';
import {
  grey,
  green,
  lightGreen,
  red,
  lightRed,
  dark,
  ivory,
} from 'styles/colors';
import { small, extraSmall } from 'styles/fontSize';

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
    background-color: ${dark};
  }
  border: 1px solid ${grey};
`;

export const SummaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  /* override material ui padding */
  padding: 0 !important;
`;

export const SummaryLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Confirmed = styled.div`
  height: 25px;
  width: 80px;
  line-height: 25px;
  text-align: center;
  border-radius: 5px;
  font-size: ${extraSmall};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 20px;
  margin-top: 10px;
  ${props => {
    if (props.confirmed) {
      return `color: ${green}; background:${lightGreen}`;
    }

    return `color: ${red}; background:${lightRed}`;
  }};
`;

export const TransactionDetails = styled.div`
  background: ${ivory};
  color: ${dark};
  overflow: hidden;
  margin: -12px -14px;
`;
