import { Typography } from '@material-ui/core'
import { useWeb3React } from '@web3-react/core'
import LiquidityInput, { CurrencyTypes } from 'components/liquidity_input'
import { ModalWrapper } from 'components/modal_wrapper'
import React, { ReactElement, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStyles } from './styles'

interface ModalProps {
  open: boolean
  handleClose: () => void
  balance: number
  selectedOption?: number
}

export default function ModalVote({ open, handleClose, balance, selectedOption }: ModalProps): ReactElement {
  const { blockInputHeader, title, blockBalance } = useStyles()

  const [voteCount, setVoteCount] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const { account, library } = useWeb3React()
  const currentId = useParams<{ id: string }>()
  const id = currentId.id.substring(1)

  const [approved, setApproved] = useState<boolean>(false)

  return (
    <ModalWrapper open={open} handleClose={handleClose} titleText={'modal_vote_vpt_title_modal'.localized()}>
      <>
        <div className={blockInputHeader}>
          <Typography className={title}>{'modal_vote_vpt_label_input'.localized()}</Typography>
          <div className={blockBalance}>
            <Typography className={title}>{'modal_vote_vpt_title_balance'.localized()}</Typography>
            <span>{'voting_vpt_template'.localized({ v1: balance ? balance : 0 })}</span>
          </div>
        </div>
        <LiquidityInput currency={CurrencyTypes.eth} label={'Input 1'} />
        {/* <LiquidityInput currency={CurrencyTypes.usdt} label={'Input 2'} /> */}
        {/* <Input
          endIcon={EndIconType.VPT}
          value={voteCount}
          balance={balance ? new Big(balance).div(1e18).toFixed() : '0'}
          onUserInput={setVoteCount}
        /> */}
        {/* <PrimaryButton
          onClick={() => {
            approved || new Big(voteCount).mul(VPT_PRECISION).lte(new Big(vptAllowance)) ? vote() : approve()
          }}
          disabled={
            loading ||
            voteCount.length === 0 ||
            (Boolean(voteCount) &&
              Boolean(vptAllowance) &&
              (new Big(voteCount).toString() == '0' || new Big(voteCount).gt(new Big(vptBalance))))
          }
          title={
            loading
              ? ''
              : approved ||
                (voteCount && vptAllowance && new Big(voteCount).mul(VPT_PRECISION).lte(new Big(vptAllowance)))
              ? 'modal_vote_vpt_title_btn_vote'.localized()
              : 'modal_vote_vpt_title_btn_approve'.localized()
          }
        >
          {loading && <CircularProgress style={{ height: '20px', width: '20px' }} color="inherit" />}
        </PrimaryButton> */}
      </>
    </ModalWrapper>
  )
}
