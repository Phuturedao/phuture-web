import { NETWORK_TYPE, SetInterface } from './index'

export const sets: { [key in NETWORK_TYPE]?: SetInterface } = {
  Ropsten: {
    hybridToken: '0x18f04e1BFA5C0F28DB6AB07dA4E7b01cD40ed349',
    indexGovernance: '0x13E662060CBc2B7d014b53abdAFD26fc44f9ca6B',
  },
}
