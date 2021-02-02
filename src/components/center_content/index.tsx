/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CenteredContent = ({ children, className }: any) => {
  const { center } = useStyles({})
  return <div className={`${center} ${className}`}>{children}</div>
}
