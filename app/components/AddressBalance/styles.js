import styled from 'styled-components';
import { ivory, grey, green, red } from 'styles/colors';
import { extraSmall, extraLarge } from 'styles/fontSize';

export const Wrapper = styled.div`
  width: 100%;
  text-align: 100%;
  color: ${grey};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
`;

export const Title = styled.div`
  font-size: ${extraSmall};
  text-transform: uppercase;
`;

export const Balance = styled.div`
  color: ${ivory};
  font-size: ${extraLarge};
  margin-bottom: -10px;
`;

export const Delta = styled.span`
  ${props => {
    if (props.delta) {
      return `color: ${green}`;
    }

    return `color: ${red}`;
  }};
`;

export const BalanceFiat = styled.div`
  > span {
    text-transform: uppercase;
  }
`;
