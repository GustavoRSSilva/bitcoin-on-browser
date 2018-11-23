/**
 * Test conversion
 */

import {
  transSatToUnit,
  convertFiatBtcToFiatUnit,
  convertCryptoFromUnitToUnit,
} from '../conversion';
import { BTC, MBTC, SAT } from '../constants';

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
});
