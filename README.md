# bitcoin-on-browser

<p align="center">
<img src="https://raw.githubusercontent.com/wiki/GustavoRSSilva/bitcoin-on-browser/images/bitcoin-on-browser.png" alt="drawing" width="200" align="center"/>
</p>


Bitcoin wallet on your browser

## Objective

Bitcoin on browser objective is to create a extension (first for chrome) that allows the user to use bitcoin on browser.

The extension will works as a small RPC that will comunicate with a public node.

## Getting started

1. install node and npm

2. clone the repository

3. cd /path/to/repository

4. install packages  
``` npm i ```

5. build the project  
``` npm run build ```

6. go to chrome://extensions/

7. load unpacked

8. select the folder Build in the project folder

you can also watch this video on how to start the extension https://youtu.be/QpXL4fst134.

on Ubuntu 18.04, you may also need to install libpng-dev (sudo apt-get install libpng-dev)

## Getting started development mode

1. install node and npm

2. clone the repository

3. cd /path/to/repository

4. install packages  
``` npm i ```

5. run the project  
``` npm run start ```


## Roadmap

- Create or import new seed/account (done)
- New address
- List address balance (done)
- Receive funds (done)
- List address transactions (done)
- List address utxos (done)
  - Disable utxo on send page.
- Create 1 - 1 transactions (done)
- Create 2 - 2 transactions
- Fully integration with [arduino-bitcoin](https://github.com/arduino-bitcoin/arduino-bitcoin)
- WYLTCAC (Would you like to create a channel)
- Create Channels
- List Channels
