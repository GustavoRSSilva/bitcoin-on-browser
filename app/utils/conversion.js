import { SAT, MBTC, BTC } from './constants';

// reduces the value to a smaller unit
export const transSatToUnit = (amountInSat = 0) => {
  let amount = parseFloat(amountInSat);
  let unit = SAT;
  if (amount < 1000) {
    return { amount, unit };
  } else if (amount / 10 ** 5 < 1000) {
    amount /= 10 ** 5;
    unit = MBTC;
  } else {
    amount /= 10 ** 8;
    unit = BTC;
  }

  amount = amount.toFixed(4);

  return { amount, unit };
};

//  convert satoshi to a unit from BTC or MBTC.
export const convertSatsToUnit = (amountInSat = 0, unit) => {
  if (!amountInSat || !unit) {
    return 0;
  }

  let val = amountInSat;
  switch (unit) {
    case BTC:
      val /= 10 ** 3;
      break;
    case MBTC:
      val /= 10 ** 8;
      break;
    case SAT:
    default:
      break;
  }

  val = val.toFixed(4);

  return val;
};

//  @params - value {float|int} value in btc
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
