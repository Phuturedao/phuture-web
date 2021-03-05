import { Card, CardContent, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

export interface ProposalCardProps {
  title: string
  votes: string
  endTitle: number
  text: string
  link?: string
}

const ProposalCard: FC<ProposalCardProps> = ({ title, votes, text, endTitle, link }: ProposalCardProps) => {
  const classes = useStyles()
  // const voted = new Big(votes).toFormat(new Big(votes), 6)
  return (
    <Card style={{ borderColor: colors.claimCardBorderColor }} className={classes.root} variant="outlined">
      <CardContent>
        <div className={classes.cardContainer}>
          <div>
            <Typography className={classes.title}>{title}</Typography>
            <div style={{ display: 'flex', height: '24px', alignItems: 'center' }}>
              <Typography className={classes.endTitle}>
                {'governance_governance_card_end_block'.localized({ v1: endTitle })}
              </Typography>
            </div>
          </div>
        </div>
        <Typography className={classes.text}>{text}</Typography>
        <Typography className={classes.link}>{link}</Typography>
      </CardContent>
    </Card>
  )
}

export default ProposalCard
