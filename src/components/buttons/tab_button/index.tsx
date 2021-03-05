import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import React from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

interface ButtonProps extends MuiButtonProps {
  text: string
  isActive: boolean
}

const TabButton = (props: ButtonProps) => {
  const { buttonStyles } = useStyles()
  const { text, isActive } = props

  return (
    <Button
      {...props}
      style={{
        backgroundColor: isActive ? colors.primaryButtonBgColor : 'transparent',
        borderColor: isActive ? colors.primaryButtonBgColor : colors.walletButtonBorderColor,
      }}
      variant="outlined"
      classes={{ root: buttonStyles }}
    >
      <span
        style={{
          color: isActive ? colors.primaryButtonTextColor : colors.white,
        }}
      >
        {text}
      </span>
    </Button>
  )
}

export default TabButton
