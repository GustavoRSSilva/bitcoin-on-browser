/**
 * Test transactions
 */

import {
  calculateTransactionAddressRecieved,
  mapUtxosToAddress,
} from '../transactions';

const transaction = {
  txid: '6504fc733e5d12e567c73b7ba9c5eb860cf27ce7f77256b8407e182b0cb28bec',
  version: 1,
  locktime: 0,
  vin: [
    {
      outpoint: {
        txid:
          'fa0e5ec6b597d751dd7f95d9cba42dc051799a36ad6b006675319e93dc234e26',
        vout: 0,
      },
      prevout: {
        scriptpubkey_hex: '76a9144a0f1e2f2b0d7daeec5265f10bbbbe08ed725e8988ac',
        scriptpubkey_asm:
          'OP_DUP OP_HASH160 OP_PUSHBYTES_20 4a0f1e2f2b0d7daeec5265f10bbbbe08ed725e89 OP_EQUALVERIFY OP_CHECKSIG',
        value: 7245485,
        scriptpubkey_address: '17kb7c9ndg7ioSuzMWEHWECdEVUegNkcGc',
        scriptpubkey_type: 'p2pkh',
      },
      scriptsig_hex:
        '4830450221009f6cc5794f62ce80049cf59f155b518081c91cbda693cfedde1ecc835a6d6286022006e4484a6c1b96c1e44a412bee55abc524c9dca0efe4a62c4d9dc521dde776ad01210363e1776495149c5a4e92acf453a3caa19000fc804e4ba2024b600ba25e09c943',
      scriptsig_asm:
        'OP_PUSHBYTES_72 30450221009f6cc5794f62ce80049cf59f155b518081c91cbda693cfedde1ecc835a6d6286022006e4484a6c1b96c1e44a412bee55abc524c9dca0efe4a62c4d9dc521dde776ad01 OP_PUSHBYTES_33 0363e1776495149c5a4e92acf453a3caa19000fc804e4ba2024b600ba25e09c943',
      witness: null,
      is_coinbase: false,
      sequence: 4294967295,
    },
  ],
  vout: [
    {
      scriptpubkey_hex: '76a9140bf05b455e7bfc9831d0f8b88e126b3c7032ea2888ac',
      scriptpubkey_asm:
        'OP_DUP OP_HASH160 OP_PUSHBYTES_20 0bf05b455e7bfc9831d0f8b88e126b3c7032ea28 OP_EQUALVERIFY OP_CHECKSIG',
      value: 3932610,
      scriptpubkey_address: '1268NNiZJr4rfTb4ejRdkzvehP6bcgy4oK',
      scriptpubkey_type: 'p2pkh',
    },
    {
      scriptpubkey_hex: '76a9144a0f1e2f2b0d7daeec5265f10bbbbe08ed725e8988ac',
      scriptpubkey_asm:
        'OP_DUP OP_HASH160 OP_PUSHBYTES_20 4a0f1e2f2b0d7daeec5265f10bbbbe08ed725e89 OP_EQUALVERIFY OP_CHECKSIG',
      value: 3213011,
      scriptpubkey_address: '17kb7c9ndg7ioSuzMWEHWECdEVUegNkcGc',
      scriptpubkey_type: 'p2pkh',
    },
  ],
  size: 226,
  weight: 904,
  fee: 99864,
  status: null,
};

const utxo = {
  txid: '037cc5b291da18b7d4e910a2a32300d148e4907e9481485125627c69d0beb85f',
  vout: 0,
  value: 357400,
  status: {
    confirmed: true,
    block_height: 1444857,
    block_hash:
      '000000000000008101e62372cc282c43861f428cfd683ed38312a83c7130852d',
  },
};

describe('transactions', () => {
  it('should correctly get the address amount of the sender', () => {
    const address = '17kb7c9ndg7ioSuzMWEHWECdEVUegNkcGc';

    const amount = calculateTransactionAddressRecieved(transaction, address);
    const expectedAmount = -4032474;

    //  from btc to sat
    expect(amount).toBe(expectedAmount);
  });

  it('should correctly get the address amount of the receiver', () => {
    const address = '1268NNiZJr4rfTb4ejRdkzvehP6bcgy4oK';

    const amount = calculateTransactionAddressRecieved(transaction, address);
    const expectedAmount = 3932610;

    //  from btc to sat
    expect(amount).toBe(expectedAmount);
  });

  it("should correctly validate the transaction's values", () => {
    // adding the value of all address in the contract with the fees
    // expect an amount of zero (0)
    const firstAddress = '17kb7c9ndg7ioSuzMWEHWECdEVUegNkcGc';
    const secondAddress = '1268NNiZJr4rfTb4ejRdkzvehP6bcgy4oK';
    const { fee } = transaction;

    const amountFirst = calculateTransactionAddressRecieved(
      transaction,
      firstAddress,
    );
    const amountSecond = calculateTransactionAddressRecieved(
      transaction,
      secondAddress,
    );

    const sum = amountFirst + amountSecond + fee;
    const expectedSum = 0;

    expect(sum).toBe(expectedSum);
  });

  it('should correctly add address to utxo', () => {
    const address = 'mx4LJCCgj6hznYDvFi3zmitMrLXodJVpP4';

    const result = mapUtxosToAddress([utxo], address);
    const expected = { ...utxo, address, enabled: true };
    expect(result[0]).toMatchObject(expected);
  });
});
