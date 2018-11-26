import axios from 'axios';

import {
  BLOCKSTREAM_URL,
  DEFAULT_SELECTED_NETWORK,
  TESTNET,
} from './constants';

const getBlockstreamApiUrl = networkId =>
  `${BLOCKSTREAM_URL}${networkId === TESTNET ? 'testnet/' : ''}api/`;

export const getAddressBalance = (
  address,
  networkId = DEFAULT_SELECTED_NETWORK,
) => axios.get(`${getBlockstreamApiUrl(networkId)}address/${address}`);

export const getAddressTransactions = (
  address,
  networkId = DEFAULT_SELECTED_NETWORK,
) => axios.get(`${getBlockstreamApiUrl(networkId)}address/${address}/txs`);

export const getAddressUtxos = (
  address,
  networkId = DEFAULT_SELECTED_NETWORK,
) => axios.get(`${getBlockstreamApiUrl(networkId)}address/${address}/utxo`);
