import axios from 'axios';

import { BLOCKSTREAM_URL, MAINNET, TESTNET } from './constants';

const getBlockstreamApiUrl = networkId =>
  `${BLOCKSTREAM_URL}${networkId === TESTNET ? 'testnet/' : ''}api/`;

export const getAddressBalance = (address, networkId = MAINNET) =>
  axios.get(`${getBlockstreamApiUrl(networkId)}address/${address}`);

export const getAddressTransactions = (address, networkId = MAINNET) =>
  axios.get(`${getBlockstreamApiUrl(networkId)}address/${address}/txs`);
