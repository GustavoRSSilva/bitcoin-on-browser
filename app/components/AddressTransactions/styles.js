import styled from 'styled-components';
import { grey, lightGreen, yellow, ivory } from 'styles/colors';
import { extraSmall } from 'styles/fontSize';

export const Title = styled.div`
  color: ${grey};
  width: 100%;
  padding: 0 20px;
`;

export const Transaction = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 20px;

  margin-top: 10px;
  color: ${grey};
  > a {
    float: left;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: columns;
  }
`;

export const Fragment = styled.div`
  width: ${props => props.width || '100%'};
  overflow: hidden;
`;

export const TransId = styled.span``;

export const Confirmed = styled.div`
  font-size: ${extraSmall};
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 5px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  color: ${ivory};
  font-weight: bold;
  letter-space: 1px;
  width: 50%;
  margin: 10px 25%;

  ${props => {
    if (props.confirmed) {
      return `background-color: ${lightGreen}`;
    }
    return `background-color: ${yellow}`;
  }};
`;
