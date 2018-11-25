/**
 * Test transactions
 */

import {
  calculateTransactionAddressRecieved,
  getTransactionsUtxos,
} from '../transactions';

const transactions = [
  {
    txid: '428aef1afd0cf9c459b658e3f4964f8e4b85038cc6cbbcaca4a0c25d145bd6d6',
    version: 2,
    locktime: 1444982,
    vin: [
      {
        txid:
          '70b9723f2f872ab97f696b82895ccf4ac310d62adeaf5a91e444dae103fa62f3',
        vout: 1,
        prevout: {
          scriptpubkey: 'a9148d1e9b581fe1159edbda1391f1decb8f2133785787',
          scriptpubkey_asm:
            'OP_HASH160 OP_PUSHBYTES_20 8d1e9b581fe1159edbda1391f1decb8f21337857 OP_EQUAL',
          value: 159067466044,
          scriptpubkey_address: '2N67PvvwCHXhVTtaJ4LGyaBSUaMKww9ekao',
          scriptpubkey_type: 'p2sh',
        },
        scriptsig: '160014c743118dc9f7da6de6c3e38bf8eddb56f256475d',
        scriptsig_asm:
          'OP_PUSHBYTES_22 0014c743118dc9f7da6de6c3e38bf8eddb56f256475d',
        witness: [
          '3044022063d8ff4701dfbad53fe7480509fadf979a649a1056c348fc0ded7c75e7d356e202203e1283833641b7e9b67abe956b11bd886e58dbdc76f6664917e68395b91fa62f01',
          '023fe35bea3a5dcf946031bcf64ec369d43ce32b7d8405363d93a320961e7247ab',
        ],
        is_coinbase: false,
        sequence: 4294967294,
      },
    ],
    vout: [
      {
        scriptpubkey: '76a91456ed66143dd5e7d1004d58e57b21b99bf8b22e1288ac',
        scriptpubkey_asm:
          'OP_DUP OP_HASH160 OP_PUSHBYTES_20 56ed66143dd5e7d1004d58e57b21b99bf8b22e12 OP_EQUALVERIFY OP_CHECKSIG',
        value: 20000,
        scriptpubkey_address: 'moSaoJfyhUe68QmE4fpvBSA9kcYLW1LuMt',
        scriptpubkey_type: 'p2pkh',
      },
      {
        scriptpubkey: 'a9142aaa8a09c988f4d493e3213a99d13cea8c4bf63887',
        scriptpubkey_asm:
          'OP_HASH160 OP_PUSHBYTES_20 2aaa8a09c988f4d493e3213a99d13cea8c4bf638 OP_EQUAL',
        value: 159067445876,
        scriptpubkey_address: '2Mw8pfcWPPWuH5wv1r7wU7bdejwoaVDnxbN',
        scriptpubkey_type: 'p2sh',
      },
    ],
    size: 249,
    weight: 669,
    fee: 168,
    status: {
      confirmed: true,
      block_height: 1444983,
      block_hash:
        '0000000016d9767899e26c813880239d145535fc99a832d9553738056b6e5308',
    },
  },
  {
    txid: '693ddf5c2c7dff7f3fc8eb5f0e5486a5ede81938ffc577ccaf8e7dcff27c0c80',
    version: 2,
    locktime: 1444978,
    vin: [
      {
        txid:
          '22cda327e9317fd56dd2212d21241971d4dc3bbd29f6f02cd29b046f8098573a',
        vout: 0,
        prevout: {
          scriptpubkey: 'a914e2320cf8ffa6522b5b55adb94eff3d0e2044314b87',
          scriptpubkey_asm:
            'OP_HASH160 OP_PUSHBYTES_20 e2320cf8ffa6522b5b55adb94eff3d0e2044314b OP_EQUAL',
          value: 159132093448,
          scriptpubkey_address: '2NDsEfDgVLT1UoxtfymVCitqrGbxkqhqDPf',
          scriptpubkey_type: 'p2sh',
        },
        scriptsig: '160014183291e7b145fb1b07c39e698acadf93555eb6b5',
        scriptsig_asm:
          'OP_PUSHBYTES_22 0014183291e7b145fb1b07c39e698acadf93555eb6b5',
        witness: [
          '304402203917617910be0372732cbf16bf896c8dc645c1bc9b9061ca9b342649a0d0d81602207ac9b8e49350833a5d334c1aca3cea676cc48a62519c1b3e22599deed24ebe9f01',
          '03738d7c1cdaa2e4d5c58a44b0da3c81af4db59110809a2f3a6e4019b326770dc1',
        ],
        is_coinbase: false,
        sequence: 4294967294,
      },
    ],
    vout: [
      {
        scriptpubkey: 'a91434930d1716db642e0c1cf9185a977af1fbb29ee587',
        scriptpubkey_asm:
          'OP_HASH160 OP_PUSHBYTES_20 34930d1716db642e0c1cf9185a977af1fbb29ee5 OP_EQUAL',
        value: 159132069880,
        scriptpubkey_address: '2Mx3DHYusNE1MKCgR3aLCxHbiovet9Tgvrh',
        scriptpubkey_type: 'p2sh',
      },
      {
        scriptpubkey: '76a91456ed66143dd5e7d1004d58e57b21b99bf8b22e1288ac',
        scriptpubkey_asm:
          'OP_DUP OP_HASH160 OP_PUSHBYTES_20 56ed66143dd5e7d1004d58e57b21b99bf8b22e12 OP_EQUALVERIFY OP_CHECKSIG',
        value: 23400,
        scriptpubkey_address: 'moSaoJfyhUe68QmE4fpvBSA9kcYLW1LuMt',
        scriptpubkey_type: 'p2pkh',
      },
    ],
    size: 249,
    weight: 669,
    fee: 168,
    status: {
      confirmed: true,
      block_height: 1444980,
      block_hash:
        '00000000000000a423bcf1ce0348dafcdc52f22f1a2815bdb987fbc2ab775dcc',
    },
  },
  {
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
          scriptpubkey_hex:
            '76a9144a0f1e2f2b0d7daeec5265f10bbbbe08ed725e8988ac',
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
  },
];

describe('transactions', () => {
  it('should correctly get the address amount of the sender', () => {
    const address = '17kb7c9ndg7ioSuzMWEHWECdEVUegNkcGc';
    const testTransacion = transactions[2];

    const amount = calculateTransactionAddressRecieved(testTransacion, address);
    const expectedAmount = -4032474;

    //  from btc to sat
    expect(amount).toBe(expectedAmount);
  });

  it('should correctly get the address amount of the receiver', () => {
    const address = '1268NNiZJr4rfTb4ejRdkzvehP6bcgy4oK';
    const testTransacion = transactions[2];

    const amount = calculateTransactionAddressRecieved(testTransacion, address);
    const expectedAmount = 3932610;

    //  from btc to sat
    expect(amount).toBe(expectedAmount);
  });

  it("should correctly validate the transaction's values", () => {
    const testTransacion = transactions[2];

    // adding the value of all address in the contract with the fees
    // expect an amount of zero (0)
    const firstAddress = '17kb7c9ndg7ioSuzMWEHWECdEVUegNkcGc';
    const secondAddress = '1268NNiZJr4rfTb4ejRdkzvehP6bcgy4oK';
    const { fee } = testTransacion;

    const amountFirst = calculateTransactionAddressRecieved(
      testTransacion,
      firstAddress,
    );
    const amountSecond = calculateTransactionAddressRecieved(
      testTransacion,
      secondAddress,
    );

    const sum = amountFirst + amountSecond + fee;
    const expectedSum = 0;

    expect(sum).toBe(expectedSum);
  });

  it('should correctly fetch empty utxos of new address', () => {
    const address = '17kb7c9ndg7ioSuzMWAAAECdEVUegNkcGc';
    const expectedUtxos = [];
    const utxos = getTransactionsUtxos(transactions, address);

    expect(utxos).toEqual(expectedUtxos);
  });

  it('should correctly fetch utxos of an used address', () => {
    const address = '17kb7c9ndg7ioSuzMWEHWECdEVUegNkcGc';
    const expectedUtxos = [
      {
        index: 1,
        txId:
          '6504fc733e5d12e567c73b7ba9c5eb860cf27ce7f77256b8407e182b0cb28bec',
        vout: {
          scriptpubkey_address: '17kb7c9ndg7ioSuzMWEHWECdEVUegNkcGc',
          scriptpubkey_asm:
            'OP_DUP OP_HASH160 OP_PUSHBYTES_20 4a0f1e2f2b0d7daeec5265f10bbbbe08ed725e89 OP_EQUALVERIFY OP_CHECKSIG',
          scriptpubkey_hex:
            '76a9144a0f1e2f2b0d7daeec5265f10bbbbe08ed725e8988ac',
          scriptpubkey_type: 'p2pkh',
          value: 3213011,
        },
      },
    ];
    const utxos = getTransactionsUtxos(transactions, address);

    expect(utxos.length).toBe(expectedUtxos.length);
    expect(utxos).toEqual(expectedUtxos);
  });

  it('should correctly fetch utxos of an testnet address with multiple transactions', () => {
    const address = 'moSaoJfyhUe68QmE4fpvBSA9kcYLW1LuMt';

    const utxos = getTransactionsUtxos(transactions, address);
    expect(utxos.length).toBe(2);
  });
});
