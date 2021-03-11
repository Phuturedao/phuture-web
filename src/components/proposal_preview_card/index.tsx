import { Card, CardContent, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { PROPOSAL } from 'routes'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

export interface ProposalPreviewCardProps {
  id: number
  title: string
  positiveVotes: string
  negativeVotes: string
  isActive: boolean
  endTitle: number
  onClick?: () => void
}

const ProposalPreviewCard: FC<ProposalPreviewCardProps> = ({
  id,
  title,
  positiveVotes,
  negativeVotes,
  isActive,
  endTitle,
  onClick,
}: ProposalPreviewCardProps) => {
  const classes = useStyles()
  const history = useHistory()

  const handleClick = async (onClick: () => void) => {
    await onClick()
    await history.push({
      pathname: `${PROPOSAL}/:${id}`,
    })
  }

  return (
    <Card
      style={{ borderColor: isActive ? colors.primaryButtonBgColor : colors.proposalCardBg }}
      className={classes.root}
      variant="outlined"
      onClick={onClick ? () => handleClick(onClick) : undefined}
    >
      <CardContent className={classes.cardContainer}>
        <div>
          <Typography className={classes.title}>{title}</Typography>
          <div className={classes.votesContainer}>
            <Typography className={classes.subtitlePositive}>
              {'governance_governance_card_votes'.localized({ v1: positiveVotes || 0 })}
            </Typography>
            <Typography className={classes.subtitleNegative}>
              {'governance_governance_card_votes'.localized({ v1: negativeVotes || 0 })}
            </Typography>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
            <Typography style={{ alignSelf: 'center' }} className={classes.endTitle}>
              {'governance_governance_card_end_block'.localized({ v1: endTitle })}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProposalPreviewCard
