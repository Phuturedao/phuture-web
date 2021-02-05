/* eslint-disable @typescript-eslint/no-explicit-any */
import { Web3Provider } from '@ethersproject/providers'
import { makeStyles } from '@material-ui/core/styles'
import { useWeb3React } from '@web3-react/core'
import React from 'react'
import { injectedConnector } from 'services/Provider'
import { colors } from 'utils/mui'
import { Header } from './header'

const useStyles = makeStyles({
  content: {
    height: 'calc(100vh - 110px)',
    overflow: 'auto',
    color: colors.white,
  },
  contentWrap: {
    height: '100vh',
    background: `radial-gradient(${colors.firstGradientColor},${colors.secondGradientColor})`,
  },
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Layout = ({ children }: any) => {
  const { account, activate } = useWeb3React<Web3Provider>()
  const { content, contentWrap } = useStyles()
  return (
    <div className={contentWrap}>
      <Header activateWeb3Account={() => activate(injectedConnector)} activeWeb3Account={account ? account : ''} />
      <div className={content}>{children}</div>
    </div>
  )
}
