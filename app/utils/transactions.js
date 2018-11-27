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

/**
 *  @dev
 *      Add address to utxo,
 *  @params utxos (array) - arry of utxos
 *  @params address (string) - address to be save
 *  @returns mappedUtxosAdress (array) - utxo final object
 *
 *  ex:
 *    "status": {
 *       "block_hash": "000000000000008101e62372cc282c43861f428cfd683ed38312a83c7130852d",
 *       "block_height": 1444857,
 *       "confirmed": true,
 *       },
 *    "txid": "037cc5b291da18b7d4e910a2a32300d148e4907e9481485125627c69d0beb85f",
 *    "value": 357400,
 *    "vout": 0,
 *    "address": "mx4LJCCgj6hznYDvFi3zmitMrLXodJVpP4",
 *    "enabled": true
 *  }
 *
 */
export const mapUtxosToAddress = (utxos = [], address) =>
  utxos.map(utxo => ({ ...utxo, address, enabled: true }));
