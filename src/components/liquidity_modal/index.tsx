import { TextField, Typography } from '@material-ui/core'
import EthIcon from 'assets/icons/tokens/EthIcon.svg'
import UsdcIcon from 'assets/icons/tokens/UsdcIcon.svg'
import { CurrencyTypes } from 'components/liquidity_input'
import { ModalWrapper } from 'components/modal_wrapper'
import React, { ReactElement } from 'react'
import { useStyles } from './styles'

interface ModalProps {
  open: boolean
  handleClose: () => void
  titleModal: string
  onClick?: () => void
  setSelectedIcon: React.Dispatch<React.SetStateAction<CurrencyTypes>>
}

const ModalLiquidity = ({ open, handleClose, titleModal, setSelectedIcon }: ModalProps): ReactElement => {
  const { content, input, cardsTitle, cards, card, iconContainer, icon, iconTitle } = useStyles()
  return (
    <ModalWrapper showedIcon open={open} handleClose={handleClose} titleText={titleModal}>
      <>
        <div className={content}>
          <TextField classes={{ root: input }} placeholder={'Search token by name or address'} variant="outlined" />
          <Typography classes={{ root: cardsTitle }}>Assets: </Typography>
          <div className={cards}>
            <div
              onClick={() => {
                setSelectedIcon(CurrencyTypes.eth)
                handleClose()
              }}
              className={card}
            >
              <div className={iconContainer}>
                <img className={icon} src={EthIcon} alt="currency-icon" />
                <Typography classes={{ root: iconTitle }}>ETH</Typography>
              </div>
              <Typography classes={{ root: iconTitle }}>0.124</Typography>
            </div>
            <div
              onClick={() => {
                setSelectedIcon(CurrencyTypes.usdt)
                handleClose()
              }}
              className={card}
            >
              <div className={iconContainer}>
                <img className={icon} src={UsdcIcon} alt="currency-icon" />
                <Typography classes={{ root: iconTitle }}>USDT</Typography>
              </div>
              <Typography classes={{ root: iconTitle }}>0</Typography>
            </div>
          </div>
        </div>
      </>
    </ModalWrapper>
  )
}
export default ModalLiquidity
