import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import DoneIcon from 'assets/icons/DoneIcon.svg'
import React, { Dispatch, SetStateAction } from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

interface ButtonProps extends MuiButtonProps {
  text: string
  activateWeb3Account?: () => void
  activeWeb3Account?: string
  confirmed?: boolean
  setConfirmed?: Dispatch<SetStateAction<boolean>>
}

const ConfirmationButton = (props: ButtonProps) => {
  const { buttonStyles } = useStyles()
  const { text, activateWeb3Account, activeWeb3Account, disabled, onClick, confirmed, setConfirmed } = props
  console.log(activeWeb3Account)

  return (
    <Button
      {...props}
      style={{
        backgroundColor: disabled
          ? colors.primaryButtonBgDisabled
          : confirmed
          ? 'transparent'
          : colors.primaryButtonBgColor,
      }}
      variant="outlined"
      className={buttonStyles}
      onClick={
        !activeWeb3Account || activeWeb3Account.length === 0
          ? activateWeb3Account
          : activeWeb3Account && activeWeb3Account.length > 0 && setConfirmed
          ? () => setConfirmed(!confirmed)
          : onClick
      }
      startIcon={confirmed ? <img src={DoneIcon} /> : undefined}
    >
      <span
        style={{
          color: disabled
            ? colors.walletButtonBorderColor
            : confirmed
            ? colors.primaryButtonBgColor
            : colors.primaryButtonTextColor,
        }}
      >
        {text}
      </span>
    </Button>
  )
}

export default ConfirmationButton
