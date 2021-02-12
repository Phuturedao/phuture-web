/* eslint-disable @typescript-eslint/no-explicit-any */
import { Web3Provider } from '@ethersproject/providers'
import { makeStyles } from '@material-ui/core/styles'
import { useWeb3React } from '@web3-react/core'
import { LandingHeader } from 'components/landing_header'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { colors } from 'utils/mui'

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
  landingContent: {
    height: '100%',
    overflow: 'auto',
  },
  landingWrap: {
    height: '100%',
    background: `radial-gradient(${colors.firstGradientColor},${colors.secondGradientColor})`,
  },
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Layout = ({ children }: any) => {
  const { landingContent, landingWrap } = useStyles()
  return (
    <>
      <div className={landingWrap}>
        <LandingHeader />
        <div className={landingContent}>{children}</div>
      </div>
    </>
  )
}
