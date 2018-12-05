export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';

export const TWELVE_WORDS_MNEMONIC = 128;
export const FITHTEEN_WORDS_MNEMONIC = 160;
export const EIGHTEEN_WORDS_MNEMONIC = 192;
export const TWENTY_ONE_WORDS_MNEMONIC = 224;
export const TWENTY_FOUR_WORDS_MNEMONIC = 256;

export const AVAILABLE_WORDS_MNEMONIC = [
  TWELVE_WORDS_MNEMONIC,
  FITHTEEN_WORDS_MNEMONIC,
  EIGHTEEN_WORDS_MNEMONIC,
  TWENTY_ONE_WORDS_MNEMONIC,
  TWENTY_FOUR_WORDS_MNEMONIC,
];
export const DEFAULT_NUM_WORDS_MNEMONIC = TWELVE_WORDS_MNEMONIC;

export const BTC = 'btc';
export const MBTC = 'mbtc';
export const SAT = 'sat';

export const AVAILABLE_CRYPTO_UNITS = [BTC, MBTC, SAT];

export const USD = 'usd';
export const EUR = 'eur';

export const COINDESK_CURRENT_PRICE_URL =
  'https://api.coindesk.com/v1/bpi/currentprice.json';

export const BLOCKSTREAM_URL = 'https://blockstream.info/';

export const INSIGHT_URL = 'blockexplorer.com/api/';

export const MAINNET = 'bitcoin';
export const TESTNET = 'testnet';

export const AVAILABLE_NETWORKS = [TESTNET];

//  Default selected network
export const DEFAULT_SELECTED_NETWORK = TESTNET;
