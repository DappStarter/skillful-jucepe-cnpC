require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember exchange gloom clog bone giant'; 
let testAccounts = [
"0x8ff3d5a9b5c4345a871ad4d69ed3e251b77657f86c0b83f1c7ae9608cd5dfdf7",
"0xdae4dd4bd31d364934b93a52cca686a5e89c6ac77b1a52a99bd72a7ace921ca2",
"0x91f311617a10d2a7bd630ac6b9e2a47b9820515936a205c8e4d0832b5b079419",
"0xb12892bce42992ee9bd540601c20d0ad4e5540f2b9bb6f4c95895779d25b9e00",
"0xdcb2b2b3cc9c8cfbaea7849748e34d09ed13868f6d02280eab908164bff4e56e",
"0x98be1e884a81c754ecc12d620ccc227696c2026ec9f730604bb4000e310a585f",
"0x7ad57a8434695ca692db2904e446d7b24cb193512ee71883f73202b338597bc9",
"0xa2f9d0bcb05b21c7e1273faabfbd9a6dcee801e718ac55c65a728ca31abde4eb",
"0x4deb2d4f79fbef6adfcb9e9ffb0491f44a037043252b1152208fe1e71d5eb089",
"0xd751f81497553b9c2d72d746fd773c8c2d6af564eb8a7316dd8534fd57fd17c8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

