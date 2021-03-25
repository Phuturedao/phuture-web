/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeStyles } from '@material-ui/core/styles'
import React, { useEffect } from 'react'
import { injectedConnector } from 'services/Provider'
import { colors } from 'utils/mui'
import { Header } from './header'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { useStore } from 'utils/store'

const useStyles = makeStyles({
  landingContent: {
    height: '100%',
    overflow: 'auto',
  },
  landingWrap: {
    height: '100%',
    background: `radial-gradient(192.14% 212.11% at 50% 212.11%, ${colors.firstGradientColor} 0%, ${colors.secondGradientColor} 100%)`,
  },
  content: {
    height: 'calc(100vh - 110px)',
    overflow: 'auto',
    color: colors.white,
  },
  contentWrap: {
    height: '100vh',
    background: `radial-gradient(192.14% 212.11% at 50% 212.11%, ${colors.firstGradientColor} 0%,${colors.secondGradientColor} 100%)`,
  },
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Layout = ({ children }: any) => {
  const { account, activate } = useWeb3React<Web3Provider>()
  const { content, contentWrap } = useStyles()
  const { web3Account, setWeb3Account } = useStore()

  return (
    <>
      <div className={contentWrap}>
        <Header activateWeb3Account={() => activate(injectedConnector)} activeWeb3Account={account ? account : ''} />
        <div className={content}>{children}</div>
      </div>
    </>
  )
}
