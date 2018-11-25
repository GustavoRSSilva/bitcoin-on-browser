/**
 *
 *  @dev - calculate the amount that an address spend or recieved in a transaction
 *  @params - Object {transaction} - the transaction that the address will map.
 *  @params - string {address} - the user address
 *  @returns {int - satoshis} the address difference spend and recieved in the transaction
 */
export const calculateTransactionAddressRecieved = (
  transaction = null,
  address,
) => {
  if (!transaction || !address) {
    return null;
  }

  // The total amount that the inputs are signed with the owner address
  let txInTotal = 0;

  //  The total amount that the outputs are left for the user
  let txOutTotal = 0;
  const { vin = [], vout = [] } = transaction;
  vin.map(txIn => {
    if (txIn.prevout && txIn.prevout.scriptpubkey_address === address) {
      txInTotal += txIn.prevout.value;
    }

    return null;
  });

  vout.map(txOut => {
    if (txOut.scriptpubkey_address === address) {
      txOutTotal += txOut.value;
    }

    return null;
  });

  return parseInt(txOutTotal - txInTotal, 10);
};

const createUtxo = (vout, index, txId) => ({
  vout,
  index,
  txId,
});

/**
 *  @dev
 *    return the utxos in a transaction
 *  @params transactions {array} - transaction array ordered by block height
 *  @params address {string} - user address
 *  @params utxos {array} - the result from previous recursions
 *  @returm utxos {array} - array of utxos
 */
const getTransactionsUtxosRecursive = (transactions = [], address) => {
  //  stop condition
  if (!transactions.length) {
    return [];
  }

  const [tx, ...rest] = transactions;
  const txId = tx.txid;

  const utxos = [];
  const vouts = tx.vout;

  vouts.map((vout, index) => {
    let isSpend = true;

    if (vout.scriptpubkey_address === address) {
      isSpend = false;

      //  if there are no more transactions, the it is a utxo
      if (rest.length) {
        rest.map(rtx => {
          const rTxvins = rtx.vin;
          const find = rTxvins.find(
            vin => vin.txid === txId && vin.vout === index,
          );
          if (find) {
            isSpend = true;
          }

          return null;
        });
      }

      if (!isSpend) {
        utxos.push(createUtxo(vout, index, txId));
      }
    }

    return null;
  });

  return [...utxos, ...getTransactionsUtxosRecursive(rest, address, utxos)];
};

export const getTransactionsUtxos = (transactions = [], address) =>
  getTransactionsUtxosRecursive(transactions, address);
