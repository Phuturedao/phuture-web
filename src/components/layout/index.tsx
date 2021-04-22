/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { colors } from 'utils/mui'

const useStyles = makeStyles({
  landingContent: {
    height: '100%',
    overflow: 'auto',
  },
  landingWrap: {
    height: '100vh',
    background: `radial-gradient(50% 50% at 50% 50%, ${colors.firstGradientColor} 0%, ${colors.secondGradientColor} 100%)`,
  },
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Layout = ({ children }: any) => {
  const { landingContent, landingWrap } = useStyles()
  return (
    <>
      <div className={landingWrap}>
        <div className={landingContent}>{children}</div>
      </div>
    </>
  )
}
