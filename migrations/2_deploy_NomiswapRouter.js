const NomiswapRouter = artifacts.require('NomiswapRouter')

const contractsAddresses = {
  'testnet': {
    weth: '0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e',
    factory: '0xd16b798daD7502A7E443dE5C589F30f70846d499',
  },
  'bsc': {
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
