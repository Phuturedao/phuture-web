import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { colors } from 'utils/mui'

const useStyles = makeStyles({
  root: {
    color: '#F15BB5',
  },
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CustomCircularProgress = ({ ...props }) => {
  const { root } = useStyles({})

  return <CircularProgress size={30} classes={{ root }} thickness={3} {...props} />
}
