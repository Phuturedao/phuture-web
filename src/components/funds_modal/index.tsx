import { Typography } from '@material-ui/core'
import { ConfirmationButton } from 'components/buttons'
import LiquidityInput, { CurrencyTypes } from 'components/liquidity_input'
import { ModalWrapper } from 'components/modal_wrapper'
import React, { ReactElement, useState } from 'react'
import { useStyles } from './styles'

interface ModalProps {
  open: boolean
  handleClose: () => void
  balance: number
}

export default function ModalFunds({ open, handleClose }: ModalProps): ReactElement {
  const { stakedContainer, staked, stakedTitle, stakedValue } = useStyles()

  const [voteValue, setVoteValue] = useState<string>('10')
  const testBalance = '985.095'
  const [approved, setApproved] = useState<boolean>(false)

  return (
    <ModalWrapper showedIcon={false} open={open} handleClose={handleClose} titleText={'overview_title'.localized()}>
      <>
        <div style={{ width: '100%', padding: '0 20px' }}>
          <LiquidityInput
            value={voteValue}
            setValue={setVoteValue}
            currency={CurrencyTypes.eth}
            label={'overview_balance_text'.localized()}
            balance={testBalance}
          />
          <div className={stakedContainer}>
            <div className={staked}>
              <Typography className={stakedTitle}>{'overview_balance_template'.localized()}</Typography>
              <Typography className={stakedValue}>{'common_phtr_template'.localized({ v1: 10000 })}</Typography>
            </div>
            <div className={staked}>
              <Typography className={stakedTitle}>{'overview_unclaimed_template'.localized()}</Typography>
              <Typography className={stakedValue}>{'common_phtr_template'.localized({ v1: 1000 })}</Typography>
            </div>
          </div>
          <div className={stakedContainer}>
            <ConfirmationButton
              text={approved ? 'overview_stake_funds_button'.localized() : 'vote_modal_approve_button_text'.localized()}
              onClick={() => setApproved(!approved)}
            />
          </div>
        </div>
      </>
    </ModalWrapper>
  )
}
