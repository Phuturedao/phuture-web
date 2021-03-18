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
  categoryTitle: {
    fontSize: '24px',
    marginTop: '10px',
    color: colors.votingCategoryTitleColor,
    userSelect: 'none',
  },
  historyButton: {
    fontSize: '16px',
    marginTop: '10px',
    color: colors.primaryButtonBgColor,
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
  const PREVIEW_LAST_INDEX = 4
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
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Typography className={classes.categoryTitle}>{'governance_governance_first_title'.localized()}</Typography>
          <Typography onClick={() => history.push(PROPOSALS)} className={classes.historyButton}>
            {'governance_governance_first_subtitle'.localized()}
          </Typography>
        </div>
        {activeProposals.map((item: any, index: number) => {
          return (
            index <= PREVIEW_LAST_INDEX && (
              <ProposalPreviewCard
                key={index}
                onClick={() => history.push(PROPOSAL)}
                id={item.id}
                isActive={true}
                positiveVotes={item.amount.positive}
                negativeVotes={item.amount.negative}
                title={item.title}
                endTitle={Number.parseInt(item.deadlineBlock)}
              />
            )
          )
        })}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Typography className={classes.categoryTitle}>{'governance_governance_second'.localized()}</Typography>
          <Typography onClick={() => history.push(PROPOSALS)} className={classes.historyButton}>
            {'governance_governance_second_subtitle'.localized()}
          </Typography>
        </div>
        {activeProposals.map((item: any, index: number) => {
          return (
            index <= PREVIEW_LAST_INDEX && (
              <ProposalPreviewCard
                key={index}
                onClick={() => history.push(PROPOSAL)}
                id={item.id}
                isActive={false}
                positiveVotes={item.amount.positive}
                negativeVotes={item.amount.negative}
                title={item.title}
                endTitle={Number.parseInt(item.deadlineBlock)}
              />
            )
          )
        })}
      </div>
    </Container>
  )
}

export default Governance