const HDWalletProvider = require('@truffle/hdwallet-provider')
const fs = require('fs')
const path = require('path')

module.exports = {
  contracts_directory: path.join(__dirname, 'contracts'),
  networks: {
    local: {
      network_id: '*',
      provider: () => {
        const localMnemonic = fs.readFileSync(path.join(__dirname, './.secret/local.secret')).toString().trim()

        return new HDWalletProvider(localMnemonic, `http://127.0.0.1:7545`)
      },
      confirmations: 0,
      deploymentPollingInterval: 1000,
      skipDryRun: true,
      timeoutBlocks: 4000, 
      networkCheckTimeout : 100,
    },
    testnet: {
      network_id: '97',
      provider: () => {
        const testnetMnemonic = fs.readFileSync(path.join(__dirname, './.secret/testnet.secret')).toString().trim()

        return new HDWalletProvider(testnetMnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545/`)
      },
      confirmations: 0,
      deploymentPollingInterval: 1000000,
      skipDryRun: true,
      timeoutBlocks: 4000, 
      networkCheckTimeout : 1000000,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    useColors: true,
    timeout: 100000,
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "=0.6.6", // A version or constraint - Ex. "^0.5.0"
      settings: {
        optimizer: {
          enabled: true,
          runs: 1000,   // Optimize for how many times you intend to run the code
        },
        evmVersion: 'istanbul',
      },
    },
  },
}
