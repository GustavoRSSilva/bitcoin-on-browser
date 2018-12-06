/**
 * Test conversion
 */

import {
  transSatToUnit,
  convertFiatBtcToFiatUnit,
  convertCryptoFromUnitToUnit,
  getFiatAmountFromCrypto,
} from '../conversion';
import { BTC, MBTC, SAT, MAINNET } from '../constants';

describe('conversion', () => {
  it('should correctly convert 100000000 SAT to 1 BTC and vice versa', () => {
    const valueInSat = 100000000; // 1 BTC
    const valueInBtc = 1;

    //  from sat to btc
    expect(convertCryptoFromUnitToUnit(valueInSat, SAT, BTC)).toBe(valueInBtc);

    //  from btc to sat
    expect(convertCryptoFromUnitToUnit(valueInBtc, BTC, SAT)).toBe(valueInSat);
  });

  it('should correctly convert 9976.2 MBTC to 9.9762 BTC and vice versa', () => {
    const valueInMbtc = 9976.2; // 1 BTC
    const valueInBtc = 9.9762;

    //  from sat to btc
    expect(convertCryptoFromUnitToUnit(valueInMbtc, MBTC, BTC)).toBe(
      valueInBtc,
    );

    //  from btc to sat
    expect(convertCryptoFromUnitToUnit(valueInBtc, BTC, MBTC)).toBe(
      valueInMbtc,
    );
  });

  it('should correctly convert 9976.2 MBTC to 9.9762 BTC and vice versa', () => {
    const valueInMbtc = 9976.2; // 1 BTC
    const valueInBtc = 9.9762;

    //  from sat to btc
    expect(convertCryptoFromUnitToUnit(valueInMbtc, MBTC, BTC)).toBe(
      valueInBtc,
    );

    //  from btc to sat
    expect(convertCryptoFromUnitToUnit(valueInBtc, BTC, MBTC)).toBe(
      valueInMbtc,
    );
  });

  it('should correctly transform 0 satoshis into amount and unit', () => {
    const valueInSat = 0;
    const expectedValue = { amount: 0, unit: BTC };
    const result = transSatToUnit(valueInSat);
    expect(result).toMatchObject(expectedValue);
  });

  it('should correctly transform 10 satoshis into amount and unit', () => {
    const valueInSat = 10;
    const expectedValue = { amount: 10, unit: SAT };
    const result = transSatToUnit(valueInSat);
    expect(result).toMatchObject(expectedValue);
  });

  it('should correctly transform 989872 satoshis into amount and unit', () => {
    const valueInSat = 989872;
    const expectedValue = { amount: 9.89872, unit: MBTC };
    const result = transSatToUnit(valueInSat);
    expect(result).toMatchObject(expectedValue);
  });

  it('should correctly transform -1119872 satoshis into amount and unit with 4 decimals', () => {
    const valueInSat = -1119872;
    const expectedValue = { amount: -11.1987, unit: MBTC };
    const result = transSatToUnit(valueInSat, 4);
    expect(result).toMatchObject(expectedValue);
  });

  it('should correctly transform 265342553 satoshis into amount and unit', () => {
    const valueInSat = 265342553;
    const expectedValue = { amount: 2.65342553, unit: BTC };
    const result = transSatToUnit(valueInSat);
    expect(result).toMatchObject(expectedValue);
  });

  it('should correctly convert 5643.20 USD/BTC into USD/MBTC and USD/SAT', () => {
    const valueInBTC = 5643.2;

    const expectedValueMBTC = 5.6432;
    const resultMBTC = convertFiatBtcToFiatUnit(valueInBTC, MBTC);
    expect(resultMBTC).toBe(expectedValueMBTC);

    const expectedValueSAT = 0.000056432;
    const resultSAT = convertFiatBtcToFiatUnit(valueInBTC, SAT);
    expect(resultSAT).toBe(expectedValueSAT);
  });

  it('should correctly convert 2 BTC worth of 5643.20 USD/BTC into USD', () => {
    const btcToFiat = 5643.2;
    const crytoUnit = BTC;
    const cryptoAmount = 2;
    const networkId = MAINNET;

    const expected = cryptoAmount * btcToFiat;

    const amountUsdOfCryptoAmount = getFiatAmountFromCrypto(
      cryptoAmount,
      btcToFiat,
      crytoUnit,
      networkId,
    );
    expect(amountUsdOfCryptoAmount).toBe(expected);
  });

  it('should correctly convert 90 MBTC worth of 5643.20 USD/BTC into USD', () => {
    const btcToFiat = 5643.2;
    const crytoUnit = MBTC;
    const cryptoAmount = 90;
    const networkId = MAINNET;

    const expected = parseFloat(
      ((cryptoAmount / 10 ** 3) * btcToFiat).toFixed(2),
    );

    const amountUsdOfCryptoAmount = getFiatAmountFromCrypto(
      cryptoAmount,
      btcToFiat,
      crytoUnit,
      networkId,
    );
    expect(amountUsdOfCryptoAmount).toBe(expected);
  });

  it('should correctly convert 1 SAT worth of 5643.20 USD/BTC into USD', () => {
    const btcToFiat = 5643.2;
    const crytoUnit = SAT;
    const cryptoAmount = 1;
    const networkId = MAINNET;

    const expected = 0;

    const amountUsdOfCryptoAmount = getFiatAmountFromCrypto(
      cryptoAmount,
      btcToFiat,
      crytoUnit,
      networkId,
    );
    expect(amountUsdOfCryptoAmount).toBe(expected);
  });
});
