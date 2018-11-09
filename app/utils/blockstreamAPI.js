import axios from 'axios';

import { BLOCKSTREAM_API_URL } from './constants';

export const getAddressBalance = address =>
  axios.get(`${BLOCKSTREAM_API_URL}address/${address}`);

export const getAddressTransactions = address =>
  axios.get(`${BLOCKSTREAM_API_URL}address/${address}/txs`);
