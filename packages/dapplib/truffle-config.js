require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remember social gloom entire symptom slab'; 
let testAccounts = [
"0xeeccf0692b875635eaeadd447a43d18ea853dc3ce64ef34bfa24aae2d7d70381",
"0x7031c3c99d277aa25e9926c3e25555ff8449931b4760f4e8521da50837aaa84d",
"0x0168aef7601f81e29c1135c81f1f720e1ee95c0a46b15f38b6ee73c169a78f19",
"0x2884e61ef79f25563db1c4a6fc50ddd9c9c8dc69c161db0f836b8446cc1ad748",
"0xc0762d3cca4e512b9763392e121cce12225b47c19147966d1eb4463b70743c34",
"0xf1548a130de162509c0b3df01322d82905b326e75c4a41ad5760ac87e87f5b32",
"0xfa6aedc6d133f94eb336ada6ded9f5f3e0cb4f34e22716879ef9dc87cf849c1d",
"0x7de01c708ed383fb773e2fdc210aa4ee9dfa0ea9e74a1722af5a394da34a7a79",
"0x7d24531c5e049a77fce284732cfbf16e02d99465e4405a67d7900e8baf239eb8",
"0x03144d68c11a829217520584758b02fdd23e3f5b2c320bfac69ba99d12328149"
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

