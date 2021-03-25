import { Container, IconButton } from '@material-ui/core'
import { activeProposals } from 'pages/governance'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { GOVERNANCE, PROPOSAL } from 'routes'
import { useStyles } from './styles'
import BackArrow from 'assets/icons/BackArrow.svg'
import ProposalPreviewCard from 'components/proposal_preview_card'
import { Pagination } from 'components/pagination'
import { CARDS_PER_PAGE } from '../history'

const Proposals = (): JSX.Element => {
  const history = useHistory()
  const classes = useStyles()
  const [page, setPage] = React.useState(1)

  const maxPage = Math.ceil(activeProposals.length / CARDS_PER_PAGE)
  const handleChange = (value: number) => {
    setPage(value)
  }
  return (
    <Container>
      <div className={classes.titleContainer}>
        <IconButton onClick={() => history.push(GOVERNANCE)}>
          <img src={BackArrow} alt="arrow-icon" />
        </IconButton>
        <span className={classes.title}>{'governance_proposals_title'.localized()}</span>
      </div>
      {activeProposals.map((item: any, index: number) => {
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
      {activeProposals.length > CARDS_PER_PAGE && (
        <div className={classes.paginationBox}>
          <Pagination page={page} maxPage={maxPage} onChange={handleChange} />
        </div>
      )}
    </Container>
  )
}

export default Proposals
