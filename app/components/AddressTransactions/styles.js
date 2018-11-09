import styled from 'styled-components';
import { grey } from 'styles/colors';
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
`;
