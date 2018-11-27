import axios from 'axios';

import { INSIGHT_URL, DEFAULT_SELECTED_NETWORK, TESTNET } from './constants';

const getInsightApiUrl = networkId =>
  `https://${networkId === TESTNET ? 'test-' : ''}${INSIGHT_URL}`;

export const pushRawTransaction = (
  networkId = DEFAULT_SELECTED_NETWORK,
  transactionBody,
) =>
  axios.post(`${getInsightApiUrl(networkId)}tx/send`, transactionBody, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    redirect: 'follow',
    referrer: 'no-referrer',
  });
