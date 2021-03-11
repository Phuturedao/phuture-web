import { Web3Provider } from '@ethersproject/providers'
import Button from '@material-ui/core/Button'
import { useWeb3React } from '@web3-react/core'
import React, { FC, useEffect } from 'react'
import { injectedConnector } from 'services/Provider'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

interface VotingButtonProps {
  web3Account: string
  onClick: () => void
  setWeb3Account: React.Dispatch<React.SetStateAction<string>>
}

const VotingButton: FC<VotingButtonProps> = ({ web3Account, setWeb3Account, onClick }: VotingButtonProps) => {
  const { buttonStyles } = useStyles()
  const { activate, account } = useWeb3React<Web3Provider>()

  useEffect(() => {
    account && setWeb3Account(account)
  }, [account])

  return (
    <Button
      onClick={() => {
        web3Account?.length === 0 ? activate(injectedConnector) : onClick()
      }}
      variant="outlined"
      classes={{ root: buttonStyles }}
    >
      <span
        style={{
          color: colors.claimButtonTextColor,
        }}
      >
        {web3Account?.length === 0
          ? 'proposal_vote_button_default'.localized()
          : 'proposal_vote_button_active'.localized()}
      </span>
    </Button>
  )
}

export default VotingButton
