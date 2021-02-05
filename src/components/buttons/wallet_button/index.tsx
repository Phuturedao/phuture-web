import Button, { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import React, { FC } from 'react'
import { transormAddress } from 'utils/AddressHelper'
import { useStyles } from './styles'

interface ButtonProps extends MuiButtonProps {
  activeWeb3Account: string
  activateWeb3Account: () => void
}

const WalletButton: FC<ButtonProps> = ({ activeWeb3Account, activateWeb3Account }: ButtonProps) => {
  const { buttonStyles } = useStyles()

  return (
    <Button onClick={activateWeb3Account} variant="outlined" classes={{ root: buttonStyles }}>
      <span>
        {activeWeb3Account ? transormAddress(activeWeb3Account) : 'header_top-right_button_state_1'.localized()}
      </span>
    </Button>
  )
}

export default WalletButton
