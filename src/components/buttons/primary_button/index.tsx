import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import React from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

interface ButtonProps extends MuiButtonProps {
  text: string
  width?: string
}

const PrimaryButton = (props: ButtonProps) => {
  const { buttonStyles } = useStyles()
  const { text, width } = props

  return (
    <Button {...props} style={{ width: width ? width : '170px' }} variant="outlined" classes={{ root: buttonStyles }}>
      <span
        style={{
          color: colors.primaryButtonTextColor,
        }}
      >
        {text}
      </span>
    </Button>
  )
}

export default PrimaryButton
