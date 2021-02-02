import { InjectedConnector } from '@web3-react/injected-connector'
import { AddressSet } from 'abi/set'
import Web3 from 'web3'
import { provider } from 'web3-core'

export enum NETWORK_TYPE {
  Mainnet = 'Mainnet',
  Ropsten = 'Ropsten',
  Rinkeby = 'Rinkeby',
  Goerli = 'Goerli',
  Kovan = 'Kovan',
}

export const chainIdMap = {
  [NETWORK_TYPE.Mainnet]: 1,
  [NETWORK_TYPE.Ropsten]: 3,
  [NETWORK_TYPE.Rinkeby]: 4,
  [NETWORK_TYPE.Goerli]: 5,
  [NETWORK_TYPE.Kovan]: 42,
}

export const networks = [
  chainIdMap[NETWORK_TYPE.Mainnet],
  chainIdMap[NETWORK_TYPE.Ropsten],
  chainIdMap[NETWORK_TYPE.Rinkeby],
  chainIdMap[NETWORK_TYPE.Goerli],
  chainIdMap[NETWORK_TYPE.Kovan],
]

export const injectedConnector = new InjectedConnector({
  supportedChainIds: networks,
})

export class Provider extends Web3 {
  constructor(connector: provider) {
    super(connector)
    this.currentNetwork = NETWORK_TYPE.Ropsten
  }

  currentNetwork: NETWORK_TYPE

  set setCurrentNetworkType(networkType: NETWORK_TYPE) {
    this.currentNetwork = networkType
  }

  get contractSet() {
    return new AddressSet(this.currentNetwork).set
  }
}
