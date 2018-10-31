import bitcoin from 'bitcoinjs-lib';

const { Buffer } = require('buffer/');

export const sha256 = val => bitcoin.crypto.sha256(Buffer.from(val));
