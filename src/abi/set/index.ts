import { sets } from './sets'

export enum NETWORK_TYPE {
  Mainnet = 'Mainnet',
  Ropsten = 'Ropsten',
  Rinkeby = 'Rinkeby',
  Goerli = 'Goerli',
  Kovan = 'Kovan',
}

export class AddressSet {
  networkType: NETWORK_TYPE
  set: EthAddress | undefined

  constructor(networkType: NETWORK_TYPE) {
    this.networkType = networkType
    this.set = sets[networkType]
  }
}

export class EthAddress implements SetInterface {
  hybridToken: string
  indexGovernance: string

  constructor(hybridToken: string, indexGovernance: string) {
    this.hybridToken = hybridToken
    this.indexGovernance = indexGovernance
  }
}

export interface SetInterface {
  hybridToken: string
  indexGovernance: string
}
