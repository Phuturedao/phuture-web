/* eslint-disable prefer-const */
import { Container, FormControl, IconButton, makeStyles, RadioGroup, Typography } from '@material-ui/core'
import { useWeb3React } from '@web3-react/core'
import BackArrow from 'assets/icons/BackArrow.svg'
import Big from 'big.js'
import { RadioButton, VotingButton } from 'components/buttons'
import ProposalCard from 'components/proposal_card'
import ModalVote from 'components/vote_vpt'
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { GOVERNANCE } from 'routes'
import { colors } from 'utils/mui'
import { useStore } from 'utils/store'

const useStyles = makeStyles({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
    userSelect: 'none',
  },
  title: {
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    color: colors.tableTextColor,
    marginLeft: '6px',
  },
  categoryTitle: {
    fontSize: '20px',
    marginTop: '10px',
    color: colors.tableTextColor,
    userSelect: 'none',
  },
})

const Proposal = (): JSX.Element => {
  const { web3Account, setWeb3Account } = useStore()
  const [openVote, setOpenVote] = useState(false)

  const handleOpenVote = () => {
    setOpenVote(true)
  }

  const handleCloseVote = () => {
    setOpenVote(false)
  }
  const { account, library } = useWeb3React()
  const classes = useStyles()
  const history = useHistory()
  const currentId = useParams<{ id: string }>()
  const [selectedOption, setSelectedOption] = useState<number>()
  const id = currentId.id.substring(1)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(((event.target as HTMLInputElement).value as unknown) as number)
  }

  const testArr = [
    { answer: 'Yes', voted: '80', winner: true },
    { answer: 'No', voted: '20', winner: false },
  ]

  return (
    <Container style={{ padding: '20px', maxWidth: '650px' }}>
      <div className={classes.titleContainer}>
        <IconButton onClick={() => history.goBack()}>
          <img src={BackArrow} alt="arrow-icon" />
        </IconButton>
        <Typography className={classes.title}>{'proposal_back_button_text'.localized()}</Typography>
      </div>
      <ProposalCard
        votes={new Big(20005).div(1e18).toFixed()}
        title={'Proposal #1'}
        endTitle={new Big(12345).toNumber()}
        text={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod placeat magnam non omnis quisquam fuga similique, facere qui ullam temporibus dignissimos ad nobis repellat blanditiis repudiandae. Excepturi, provident sint.'
        }
        link={'material-ui.com'}
      />
      <Typography className={classes.categoryTitle}>{'proposal_options_title'.localized()}</Typography>
      <FormControl style={{ width: '100%' }} component="fieldset">
        <RadioGroup value={selectedOption} onChange={handleChange}>
          {testArr &&
            testArr.map((item: { voted: string; answer: string; winner: boolean }, index: number) => (
              <>
                <RadioButton
                  key={index}
                  disabled={false}
                  total={new Big('100').div(1e18).toFixed()}
                  winner={false}
                  voted={new Big(item.voted).div(1e18).toFixed()}
                  active={selectedOption || 100}
                  value={index}
                  label={item.answer}
                />
              </>
            ))}
        </RadioGroup>
      </FormControl>
      <div style={{ marginTop: '8px' }}>
        {Boolean(selectedOption) && (
          <VotingButton
            web3Account={account ? account : ''}
            setWeb3Account={setWeb3Account}
            onClick={() => handleOpenVote()}
          />
        )}
      </div>
      <ModalVote balance={1000000} open={openVote} handleClose={handleCloseVote} selectedOption={selectedOption} />
    </Container>
  )
}

export default Proposal
