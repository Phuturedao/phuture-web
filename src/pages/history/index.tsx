import { Container, IconButton } from '@material-ui/core'
import { Pagination } from 'components/pagination'
import ProposalPreviewCard from 'components/proposal_preview_card'
import { inactiveProposals } from 'pages/governance'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { GOVERNANCE, PROPOSAL } from 'routes'
import { useStyles } from './styles'
import BackArrow from 'assets/icons/BackArrow.svg'

const History = (): JSX.Element => {
  const history = useHistory()
  const classes = useStyles()
  const [page, setPage] = React.useState(1)

  const cardsPerPage = 6
  const maxPage = Math.ceil(inactiveProposals.length / cardsPerPage)
  const handleChange = (value: number) => {
    setPage(value)
  }
  return (
    <Container>
      <div className={classes.titleContainer}>
        <IconButton onClick={() => history.push(GOVERNANCE)}>
          <img src={BackArrow} alt="arrow-icon" />
        </IconButton>
        <span className={classes.title}>{'governance_proposals_history_title'.localized()}</span>
      </div>
      {inactiveProposals.map((item: any, index: number) => {
        return (
          <ProposalPreviewCard
            key={index}
            onClick={() =>
              history.push({
                pathname: `${PROPOSAL}/:${item.id}`,
              })
            }
            id={item.id}
            isActive={false}
            positiveVotes={item.amount.positive}
            negativeVotes={item.amount.negative}
            title={item.title}
            endTitle={Number.parseInt(item.deadlineBlock)}
          />
        )
      })}
      {inactiveProposals.length > cardsPerPage && (
        <div className={classes.paginationBox}>
          <Pagination page={page} maxPage={maxPage} onChange={handleChange} />
        </div>
      )}
    </Container>
  )
}

export default History
