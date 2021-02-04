import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import React from 'react'
import { useStyles } from './styles'

interface ButtonProps extends MuiButtonProps {
  text: string
}

const BottomTableButton = (props: ButtonProps) => {
  const { buttonStyles } = useStyles()
  const { text } = props

  return (
    <Button {...props} variant="outlined" classes={{ root: buttonStyles }}>
      <span>{text}</span>
    </Button>
  )
}

export default BottomTableButton
