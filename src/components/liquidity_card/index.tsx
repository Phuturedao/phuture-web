import { Web3Provider } from '@ethersproject/providers'
import { IconButton, Typography } from '@material-ui/core'
import { useWeb3React } from '@web3-react/core'
import InfoIcon from 'assets/icons/InfoIcon.svg'
import { ConfirmationButton } from 'components/buttons'
import LiquidityInput, { CurrencyTypes } from 'components/liquidity_input'
import { LiquiditySlider } from 'components/liquidity_slider'
import React, { useState } from 'react'
import { injectedConnector } from 'services/Provider'
import { useStyles } from './styles'

const LiquidityCard = () => {
  const {
    cardContainer,
    cardTitleContainer,
    cardTitleText,
    cardTitleIcon,
    sliderContainer,
    sliderText,
    sliderTextTitle,
    sliderTextValue,
    bottomButtonsContainer,
  } = useStyles({})
  const { account, activate } = useWeb3React<Web3Provider>()

  const [value, setValue] = useState<number>(50)
  const [confirmed, setConfirmed] = useState<boolean>(false)

  const handleSliderChange = (event: any, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={cardContainer}>
      <div className={cardTitleContainer}>
        <Typography classes={{ root: cardTitleText }}>Liquidity</Typography>
        <IconButton classes={{ root: cardTitleIcon }}>
          <img src={InfoIcon} />
        </IconButton>
      </div>
      <LiquidityInput currency={CurrencyTypes.eth} label={'Input 1'} />
      <LiquidityInput currency={CurrencyTypes.usdt} label={'Input 2'} />
      <div className={sliderContainer}>
        <LiquiditySlider
          value={value}
          onChange={(e, value) => handleSliderChange(e, value as number)}
          aria-labelledby="input-slider"
        />
        <div className={sliderText}>
          <div>
            <span className={sliderTextTitle}>ETH: </span>
            <span className={sliderTextValue}>{`${value}%`}</span>
          </div>
          <div>
            <span className={sliderTextTitle}>USDT: </span>
            <span className={sliderTextValue}>{`${100 - value}%`}</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '28px' }}>
        <span className={sliderTextTitle}>Total: </span>
        <span className={sliderTextValue}>{`0.001 ETH`}</span>
      </div>
      <div className={bottomButtonsContainer}>
        <ConfirmationButton
          activateWeb3Account={() => activate(injectedConnector)}
          activeWeb3Account={account ? account : ''}
          text={account ? 'Confirm' : 'header_top-right_button_state_1'.localized()}
          confirmed={confirmed}
          setConfirmed={setConfirmed}
        />
        {account && (
          <ConfirmationButton
            activateWeb3Account={() => activate(injectedConnector)}
            activeWeb3Account={account ? account : ''}
            text={'pools_add_liquidity_button'.localized()}
            disabled={!confirmed}
          />
        )}
      </div>
    </div>
  )
}
export default LiquidityCard
