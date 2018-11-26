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
