import { Slide, Slider, TextField } from '@material-ui/core'
import React from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'
import EthIcon from 'assets/icons/tokens/EthIcon.svg'
import UsdcIcon from 'assets/icons/tokens/UsdcIcon.svg'
import LiquidityCardArrow from 'assets/icons/LiquidityCardArrow.svg'
import LiquidityInput from 'components/liquidity_input'
import { LiquiditySlider } from 'components/liquidity_slider'
import { PrimaryButton } from 'components/buttons'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { injectedConnector } from 'services/Provider'

const LiquidityCard = () => {
  const {
    cardContainer,
    sliderContainer,
    sliderText,
    sliderTextTitle,
    sliderTextValue,
    bottomButtonsContainer,
  } = useStyles({})
  const { account, activate } = useWeb3React<Web3Provider>()

  const [value, setValue] = React.useState<number>(50)

  const handleSliderChange = (event: any, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={cardContainer}>
      <div></div>
      <span>Input 1</span>
      <img />
      <LiquidityInput />
      <LiquidityInput />
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
        <PrimaryButton
          activateWeb3Account={() => activate(injectedConnector)}
          activeWeb3Account={account ? account : ''}
          width={'100%'}
          height={'48px'}
          text={'header_top-right_button_state_1'.localized()}
        />
      </div>
    </div>
  )
}
export default LiquidityCard
