import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import React from 'react'
import { useStyles } from './styles'

interface ButtonProps extends MuiButtonProps {
  text: string
  width?: string
}

const TableButton = (props: ButtonProps) => {
  const { buttonStyles } = useStyles()
  const { text, width } = props

  return (
    <Button {...props} style={{ width: width ? width : '87px' }} variant="outlined" classes={{ root: buttonStyles }}>
      <span>{text}</span>
    </Button>
  )
}

export default TableButton
