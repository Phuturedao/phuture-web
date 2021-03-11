import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import React, { Dispatch, SetStateAction } from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

interface ButtonProps extends MuiButtonProps {
  text: string
  darkType?: boolean
}

const ConfirmationButton = (props: ButtonProps) => {
  const { buttonStyles } = useStyles()
  const { text, darkType, disabled } = props

  const buttonBgColor = darkType ? colors.voteButtonDarkBg : disabled ? 'transparent' : colors.primaryButtonBgColor
  const buttonTextColor = darkType || disabled ? colors.white : colors.primaryButtonTextColor

  return (
    <Button
      {...props}
      style={{
        backgroundColor: buttonBgColor,
      }}
      variant="outlined"
      className={buttonStyles}
    >
      <span
        style={{
          color: buttonTextColor,
        }}
      >
        {text}
      </span>
    </Button>
  )
}

export default ConfirmationButton
