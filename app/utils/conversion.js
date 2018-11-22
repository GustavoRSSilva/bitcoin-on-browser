import { SAT, MBTC, BTC, TESTNET } from './constants';

export const toFixed = (amount = 0, places) =>
  parseFloat(amount.toFixed(places));

/*
 *  @dev converts an amount in satoshis to be displayed in the screen
 *  @returns - amount {string} - the amount
 *  @returns - unit {string} - the right unit
 * */
export const transSatToUnit = (amountInSat = 0) => {
  let amount = parseFloat(amountInSat);

  // Convert the amount to absolute to avoid negative numbers
  const amountABS = Math.abs(amount);

  let unit = SAT;
  if (amountABS < 1000) {
    return { amount, unit };
  } else if (amountABS / 10 ** 5 < 1000) {
    amount /= 10 ** 5;
    unit = MBTC;
  } else {
    amount /= 10 ** 8;
    unit = BTC;
  }

  amount = toFixed(amount, 4);

  return { amount, unit };
};

/**
 *  @dev convert satoshi to a unit from BTC or MBTC.
 */
const convertBtcToUnit = (amountInBtc = 0, unit) => {
  if (!amountInBtc || !unit) {
    return 0;
  }

  let val = amountInBtc;
  switch (unit) {
    case MBTC:
      val *= 10 ** 3;
      break;
    case SAT:
      val *= 10 ** 8;
      break;
    case BTC:
    default:
      break;
  }

  return val;
};

/**
 *  @dev convert mBtc to a unit from BTC or MBTC.
 */
const convertMbtcToUnit = (amountInMbtc = 0, unit) => {
  if (!amountInMbtc || !unit) {
    return 0;
  }

  let val = amountInMbtc;
  switch (unit) {
    case BTC:
      val /= 10 ** 3;
      break;
    case SAT:
      val *= 10 ** 5;
      break;
    case MBTC:
    default:
      break;
  }

  return val;
};

/**
 *  @dev convert satoshi to a unit from BTC or MBTC.
 */
const convertSatsToUnit = (amountInSat = 0, unit) => {
  if (!amountInSat || !unit) {
    return 0;
  }

  let val = amountInSat;
  switch (unit) {
    case BTC:
      val /= 10 ** 8;
      break;
    case MBTC:
      val /= 10 ** 5;
      break;
    case SAT:
    default:
      break;
  }

  return val;
};

/**
 *  @dev converts a Crypto amount from a unit to another unit.
 *  @params - amount {float} - the amount to be converted
 *  @params - from {string} - the from unit
 *  @params - to {string} - the unit to
 *  @params - decimals {int | null} - convert to decimals
 *  @returns - amountConverted {float} - the amount converted to the unit
 */
export const convertCryptoFromUnitToUnit = (
  amount,
  from,
  to,
  decimals = null,
) => {
  let val = amount;
  switch (from) {
    // if from equal to, nothing changes
    case to:
      break;

    case BTC:
      val = convertBtcToUnit(amount, to);
      break;

    case MBTC:
      val = convertMbtcToUnit(amount, to);
      break;

    case SAT:
      val = convertSatsToUnit(amount, to);
      break;

    default:
      break;
  }

  if (decimals !== null) {
    val = toFixed(val, decimals);
  }

  return val;
};

/**
 *  @dev - converts any crepto amount and unit to BTC
 */
//  TODO needs testing
export const convertAmountUnitToBtc = (amount = 0, unit) => {
  let val = amount;
  switch (unit) {
    case MBTC:
      val = convertMbtcToUnit(amount, BTC);
      break;

    case SAT:
      val = convertSatsToUnit(amount, BTC);
      break;
    case BTC:
    default:
      break;
  }

  return val;
};

/**
 *  @params - value {float|int} value in btc
 */
export const convertFiatBtcToFiatUnit = (value, unit) => {
  let val = value;
  switch (unit) {
    case MBTC:
      val /= 10 ** 3;
      break;
    case SAT:
      val /= 10 ** 8;
      break;
    case BTC:
    default:
      break;
  }
  return val;
};

//  TODO: change fiatToBtc to btcToFiat
//  TODO needs testing
export const getFiatAmountFromCrypto = (amount, fiatToBtc, unit, networkId) => {
  //  Testnet BTC has no value
  if (networkId === TESTNET) {
    return 0;
  }

  const valueInFiat = amount * convertFiatBtcToFiatUnit(fiatToBtc, unit);
  return toFixed(valueInFiat, 2);
};

/**
 *  @dev convert any amount (fiat) into the Crypto unit (Btc, mBtc or Sat)
 */
//  TODO needs testing
export const getBtcAmountFromFiat = (amount, btcToFiat, unit, networkId) => {
  if (networkId === TESTNET) {
    return 0;
  }

  const unitToFiat = convertFiatBtcToFiatUnit(btcToFiat, unit);
  return toFixed(unitToFiat * amount, 4);
};
