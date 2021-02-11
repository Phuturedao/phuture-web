import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import React from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

interface ButtonProps extends MuiButtonProps {
  text: string
  width?: string
  height?: string
  activateWeb3Account?: () => void
  activeWeb3Account?: string
}

const PrimaryButton = (props: ButtonProps) => {
  const { buttonStyles } = useStyles()
  const { text, width, height, activateWeb3Account, activeWeb3Account, onClick } = props
  console.log(activeWeb3Account)

  return (
    <Button
      {...props}
      style={{ width: width ? width : '170px', height: height ? height : '36px' }}
      variant="outlined"
      classes={{ root: buttonStyles }}
      onClick={!activeWeb3Account || activeWeb3Account.length === 0 ? activateWeb3Account : onClick}
    >
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
