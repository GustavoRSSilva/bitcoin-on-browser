import styled from 'styled-components';
import { grey, steelGrey, lightGreen, yellow, ivory } from 'styles/colors';
import { extraSmall, small } from 'styles/fontSize';

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
  width: calc(100% - 6px);
  height: 80px;
  border: 1px solid ${grey};
  border-radius: 5px;
  margin: 5px 3px;
  margin-top: 10px;
  color: ${grey};
  > a {
    float: left;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: columns;
    padding: 10px 17px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${steelGrey};
  }
`;

export const Fragment = styled.div`
  width: ${props => props.width || '100%'};
  overflow: hidden;
`;

export const TransId = styled.span`
    width; 100%;
`;

export const Confirmed = styled.div`
  font-size: ${extraSmall};
  text-transform: uppercase;
  border-radius: 5px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  color: ${ivory};
  font-weight: bold;
  letter-spacing: 1px;
  width: 50%;
  margin: 10px 25%;

  ${props => {
    if (props.confirmed) {
      return `background-color: ${lightGreen}`;
    }
    return `background-color: ${yellow}`;
  }};
`;

export const Amount = styled.div`
  width: 100%;
  text-align: center;
`;
