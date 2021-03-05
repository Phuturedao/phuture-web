import { Container, makeStyles, Typography } from '@material-ui/core'
import { useWeb3React } from '@web3-react/core'
import ProposalPreviewCard from 'components/proposal_preview_card'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { PROPOSAL, PROPOSALS } from 'routes'
import { colors } from 'utils/mui'

const useStyles = makeStyles({
  rootContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '20px 0',
  },
  defaultTitleBox: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '104px',
  },
  defaultTitle: {
    fontFamily: 'Rubik, sans-serif',
    fontSize: '48px',
    color: colors.primaryGrayTextActiveColor,
    maxWidth: '700px',
    textAlign: 'center',
  },
  defaultButton: {
    width: '203px',
    height: '46px',
    marginTop: '40px',
    backgroundColor: colors.primaryGreen,
    borderRadius: '66px',
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '16px',
    fontFamily: 'Rubik, sans-serif',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.primaryGreen,
      opacity: 0.6,
    },
    '&:active': {
      backgroundColor: colors.primaryGreen,
      opacity: 0.3,
    },
  },
  categoryTitle: {
    fontSize: '18px',
    marginTop: '10px',
    color: colors.votingCategoryTitleColor,
    userSelect: 'none',
  },
  historyButton: {
    fontSize: '18px',
    marginTop: '10px',
    color: colors.claimButtonBg,
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'all 0.4s',
    '&:hover': {
      opacity: 0.6,
    },
  },
})

const Governance = (): JSX.Element => {
  const classes = useStyles()
  const history = useHistory()
  const { account, library, activate } = useWeb3React()
  const [currentBlock, setCurrentBlock] = useState<number>()
  const activeProposals = [
    {
      id: 1,
      amount: { positive: '101', negative: '1' },
      title: 'Proposal #1',
      deadlineBlock: 999991,
    },
    {
      id: 2,
      amount: { positive: '102', negative: '2' },
      title: 'Proposal #2',
      deadlineBlock: 999992,
    },
    {
      id: 3,
      amount: { positive: '103', negative: '3' },
      title: 'Proposal #3',
      deadlineBlock: 999993,
    },
  ]

  return (
    <Container className={classes.rootContainer}>
      <div style={{ width: '100%', padding: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography className={classes.categoryTitle}>{'governance_governance_first_title'.localized()}</Typography>
          <Typography onClick={() => history.push(PROPOSALS)} className={classes.historyButton}>
            {'governance_governance_first_subtitle'.localized()}
          </Typography>
        </div>
        {activeProposals.map((item: any, index: number) => {
          return (
            index <= 4 && (
              <ProposalPreviewCard
                key={index}
                onClick={() => history.push(PROPOSAL)}
                id={item.id}
                isActive={true}
                positiveVotes={item.amount !== undefined ? item.amount.positive : '0'}
                negativeVotes={item.amount !== undefined ? item.amount.negative : '0'}
                title={item.title}
                endTitle={Number.parseInt(item.deadlineBlock)}
              />
            )
          )
        })}
        {/* {inactiveProposalPreview && inactiveProposalPreview.length >= 1 && (
          <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography className={classes.categoryTitle}>
                {'voting_proposals_history_category'.localized()}
              </Typography>
              <Typography onClick={() => history.push(HISTORY)} className={classes.historyButton}>
                {'voting_all_history_button'.localized()}
              </Typography>
            </div>
            {inactiveProposalPreview.map((item: any, index: number) => {
              return (
                index <= 4 && (
                  <ProposalPreviewCard
                    key={index}
                    onClick={async () => await getProposal(item.id)}
                    id={item.id}
                    isActive={false}
                    votes={item.amount !== undefined ? votesFormatter(item.amount) : '0'}
                    title={item.title}
                    endTitle={Number.parseInt(item.deadlineBlock)}
                  />
                )
              )
            })}
          </>
        )} */}
      </div>
    </Container>
  )
}

export default Governance
