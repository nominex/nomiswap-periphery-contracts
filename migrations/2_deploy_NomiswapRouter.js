const NomiswapRouter = artifacts.require('NomiswapRouter')

const contractsAddresses = {
  97: {
    weth: '0x0000000000000000000000000000000000000000',    // todo: paste a valid address
    factory: '0x0000000000000000000000000000000000000000', // todo: paste a valid address
  },
  56: {
    weth: '0x0000000000000000000000000000000000000000',    // todo: paste a valid address
    factory: '0x0000000000000000000000000000000000000000', // todo: paste a valid address
  },
  'local': {
    weth: '0x0000000000000000000000000000000000000000',
    factory: '0xA3b272e745aEf22AF919C9473147f9C6C5062b7b',
  }
}

module.exports = async function (deployer, network) {
  // Deploy the NomiswapRouter contract as our only task

  const WETH_ADDRESS = contractsAddresses[network].weth
  const FACTORY_ADDRESS = contractsAddresses[network].factory

  await deployer.deploy(NomiswapRouter, FACTORY_ADDRESS, WETH_ADDRESS)
}
