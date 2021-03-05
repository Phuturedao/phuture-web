import { FormControlLabel, FormControlLabelProps, Radio, RadioProps, withStyles } from '@material-ui/core'
import Big from 'big.js'
import React, { useState } from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

const CustomRadio = withStyles({
  root: {
    color: colors.primaryButtonBgColor,
    padding: 0,
    marginRight: '12px',
  },
})((props: RadioProps) => {
  const { defaultCircle, circleContainer } = useStyles()
  return <Radio color="default" {...props} />
})

type RadioButtonProps = Omit<FormControlLabelProps, 'control' | 'disabled'>

const RadioButton = (
  props: RadioButtonProps & {
    active: number
    winner?: boolean
    myVote?: number
    voted: string
    meVoted?: number
    disabled: boolean
    total: string
  },
): JSX.Element => {
  const {
    card,
    label,
    disabledLabel,
    labelContent,
    labelContentLeft,
    labelContentRight,
    voteLabel,
    vptText,
    vptMyText,
    vptPercent,
  } = useStyles()
  const [activeCard, setActiveCard] = useState<number>()

  const votesInPercent =
    props.voted && props.total !== '0' ? new Big(props.voted).mul(100).div(props.total).toFixed(2) : '0.00'
  const isActiveBorder = (Boolean(props.active) && activeCard === props.active) || props.winner
  // const votes = new Big(props.voted).toFormat(new Big(props.voted), 6)
  return (
    <div
      style={{
        border: `1px solid ${isActiveBorder ? colors.primaryButtonBgColor : colors.defaultCardBg}`,
      }}
      className={card}
    >
      <FormControlLabel
        classes={{ root: label, disabled: disabledLabel }}
        control={
          <CustomRadio
            checked={props.active === activeCard}
            onChange={(e) => setActiveCard((e.target.value as unknown) as number)}
          />
        }
        label={
          <div className={labelContent}>
            <div className={labelContentLeft}>
              <span>{props.label}</span>
              {props.myVote === props.value && (
                <span className={voteLabel}>{'proposals_your_vote_label'.localized()}</span>
              )}
            </div>
            <div className={labelContentRight}>
              <div style={{ display: 'flex' }}>
                <span className={vptText}>
                  {'common_phtr_template'.localized({
                    v1: props.voted,
                  })}
                </span>
              </div>
              <span className={vptPercent}>{'common_percent_template'.localized({ v1: votesInPercent })}</span>
            </div>
          </div>
        }
        disabled={props.disabled}
        value={props.value}
      />
    </div>
  )
}

export default RadioButton
