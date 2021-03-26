import { Slider, Tooltip, Typography } from '@material-ui/core'
import { ConfirmationButton } from 'components/buttons'
import LiquidityInput, { CurrencyTypes } from 'components/liquidity_input'
import { ModalWrapper } from 'components/modal_wrapper'
import React, { ReactElement, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { STAKING } from 'routes'
import { useStyles } from './styles'
import { percentsToValue, valueToPercent } from 'utils/NumbersHelper'

interface ModalProps {
  open: boolean
  handleClose: () => void
  balance: number
  selectedOption?: number
}

interface ValueLabelComponentProps {
  children: React.ReactElement
  open: boolean
  value: number
}

const ValueLabelComponent = (props: ValueLabelComponentProps) => {
  const { children, open, value } = props
  const { rootTooltip } = useStyles()

  return (
    <Tooltip
      classes={{ tooltip: rootTooltip }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={'common_percent_template'.localized({ v1: value })}
    >
      {children}
    </Tooltip>
  )
}

export default function ModalVote({ open, handleClose }: ModalProps): ReactElement {
  const {
    rootSlider,
    railSlider,
    trackSlider,
    thumbColorPrimary,
    percentsBox,
    percentText,
    stakedContainer,
    staked,
    stakedTitle,
    stakedValue,
  } = useStyles()

  const [voteValue, setVoteValue] = useState<string>('10')
  // const currentId = useParams<{ id: string }>()
  // const id = currentId.id.substring(1)
  const history = useHistory()
  const testBalance = '985.095'
  const [approved, setApproved] = useState<boolean>(false)

  const handleSliderChange = (event: any, newValue: number) => {
    if (newValue === 100) {
      setVoteValue(testBalance)
    } else {
      setVoteValue(percentsToValue(newValue, testBalance))
    }
  }

  return (
    <ModalWrapper showedIcon open={open} handleClose={handleClose} titleText={'vote_modal_title'.localized()}>
      <>
        <div style={{ width: '100%', padding: '0 20px' }}>
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
          <div className={percentsBox}>
            <Typography className={percentText}>{'common_percent_template'.localized({ v1: 0 })}</Typography>
            <span className={percentText}>{'common_percent_template'.localized({ v1: 100 })}</span>
          </div>
          <div className={stakedContainer}>
            <div className={staked}>
              <Typography className={stakedTitle}>{'vote_modal_staked_text'.localized()}</Typography>
              <Typography className={stakedValue}>{'common_phtr_template'.localized({ v1: 10000 })}</Typography>
            </div>
            <div className={staked}>
              <Typography className={stakedTitle}>{'vote_modal_total_text'.localized()}</Typography>
              <Typography className={stakedValue}>{'common_phtr_template'.localized({ v1: 1000 })}</Typography>
            </div>
          </div>
          <div className={stakedContainer}>
            <ConfirmationButton
              text={approved ? 'vote_modal_vote_button_text'.localized() : 'vote_modal_approve_button_text'.localized()}
              onClick={() => setApproved(!approved)}
            />
            <ConfirmationButton
              onClick={() => history.push(STAKING)}
              darkType
              text={'vote_modal_stake_button_text'.localized()}
            />
          </div>
        </div>
      </>
    </ModalWrapper>
  )
}
