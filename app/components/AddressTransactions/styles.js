import styled from 'styled-components';
import {
  grey,
  steelGrey,
  lightGreen,
  yellow,
  ivory,
  lightBlue,
} from 'styles/colors';
import { extraSmall } from 'styles/fontSize';

export const Title = styled.div`
  margin-top: 40px;
  color: ${lightBlue};
  width: 100%;
  padding: 0 20px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Transaction = styled.div`
  width: calc(100% - 6px);
  height: 80px;
  background-color: ${steelGrey};
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
    border: 1px solid ${lightBlue};
    color: ${lightBlue};
  }
`;

export const Fragment = styled.div`
  width: ${props => props.width || '100%'};
  overflow: hidden;
`;

export const TransId = styled.span;

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
