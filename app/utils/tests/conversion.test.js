/**
 * Test conversion
 */

import {
  convertSatsToUnit,
  transSatToUnit,
  convertFiatBtcToFiatUnit,
} from '../conversion';
import { BTC, MBTC, SAT } from '../constants';

describe('conversion', () => {
  it('should correctly convert 100000000 SAT to 1.0000 BTC', () => {
    const value = 100000000; // 1 BTC
    const expectedValue = 1;
    expect(convertSatsToUnit(value, BTC)).toBe(expectedValue);
  });

  it('should correctly transform 10 satoshis into amount and unit', () => {
    const valueInSat = 10;
    const expectedValue = { amount: 10, unit: SAT };
    const result = transSatToUnit(valueInSat);
    expect(result).toMatchObject(expectedValue);
  });

  it('should correctly transform 989872 satoshis into amount and unit', () => {
    const valueInSat = 989872;
    const expectedValue = { amount: 9.8987, unit: MBTC };
    const result = transSatToUnit(valueInSat);
    expect(result).toMatchObject(expectedValue);
  });

  it('should correctly transform -1119872 satoshis into amount and unit', () => {
    const valueInSat = -1119872;
    const expectedValue = { amount: -11.1987, unit: MBTC };
    const result = transSatToUnit(valueInSat);
    expect(result).toMatchObject(expectedValue);
  });

  it('should correctly transform 265342553 satoshis into amount and unit', () => {
    const valueInSat = 265342553;
    const expectedValue = { amount: 2.6534, unit: BTC };
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
