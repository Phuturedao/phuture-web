import { Container, IconButton, Slider, Tooltip } from '@material-ui/core'
import { ConfirmationButton } from 'components/buttons'
import LiquidityInput, { CurrencyTypes } from 'components/liquidity_input'
import React, { useState } from 'react'
import { percentsToValue, valueToPercent } from 'utils/NumbersHelper'
import { useStyles } from './styles'
import InfoIcon from 'assets/icons/InfoIcon.svg'

const Staking = (): JSX.Element => {
  const testBalance = '985.095'
  const [approved, setApproved] = useState<boolean>(false)
  const [voteValue, setVoteValue] = useState<string>('10')

  const handleSliderChange = (event: any, newValue: number) => {
    if (newValue === 100) {
      setVoteValue(testBalance)
    } else {
      setVoteValue(percentsToValue(newValue, testBalance))
    }
  }

  interface LabelComponentProps {
    children: React.ReactElement
    value: number
  }

  const ValueLabelComponent = (props: LabelComponentProps) => {
    const { children, value } = props
    const { rootTooltip } = useStyles()

    return (
      <Tooltip
        classes={{ tooltip: rootTooltip }}
        enterTouchDelay={0}
        placement="top"
        title={'common_percent_template'.localized({ v1: value })}
      >
        {children}
      </Tooltip>
    )
  }

  const {
    rootBox,
    pageBox,
    title,
    subtitle,
    card,
    headingBox,
    headingText,
    headingIcon,
    rootSlider,
    railSlider,
    trackSlider,
    thumbColorPrimary,
    apyBox,
    apyTitle,
    apyValue,
  } = useStyles()
  return (
    <Container className={rootBox}>
      <div className={pageBox}>
        <span className={title}>{'staking_title'.localized()}</span>
        <span className={subtitle}>{'staking_subtitle'.localized()}</span>
        <div className={card}>
          <div className={headingBox}>
            <span className={headingText}>{'staking_card_stake_button_text'.localized()}</span>
            <IconButton classes={{ root: headingIcon }}>
              <img src={InfoIcon} alt="info-icon" />
            </IconButton>
          </div>
          <LiquidityInput
            value={voteValue}
            setValue={setVoteValue}
            currency={CurrencyTypes.eth}
            label={'vote_modal_input_title'.localized()}
            balance={testBalance}
          />
          <Slider
            value={valueToPercent(voteValue, testBalance)}
            ValueLabelComponent={ValueLabelComponent}
            classes={{ root: rootSlider, rail: railSlider, track: trackSlider, thumbColorPrimary: thumbColorPrimary }}
            aria-labelledby="input-slider"
            step={1}
            onChange={(e, value) => handleSliderChange(e, value as number)}
          />
          <div className={apyBox}>
            <span className={apyTitle}>{'staking_apy_text'.localized()}</span>
            <span className={apyValue}>100%</span>
          </div>
          <div>
            <ConfirmationButton
              text={approved ? 'staking_button_text'.localized() : 'vote_modal_approve_button_text'.localized()}
              onClick={() => setApproved(!approved)}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Staking
