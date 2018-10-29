import bitcoin from 'bitcoinjs-lib';

export const sha256 = val => bitcoin.crypto.sha256(val);
