import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  card: {
    backgroundColor: colors.defaultCardBg,
    margin: '8px 0',
    userSelect: 'none',
    borderRadius: '10px',
    transition: 'all 0.4s',
    boxSizing: 'border-box',
    width: '100%',
    '&:hover': {
      opacity: 0.6,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
  label: {
    width: '100%',
    height: '100%',
    paddingLeft: '16px',
    paddingRight: '16px',
    boxSizing: 'border-box',
    padding: '20px 16px',
    color: colors.white,
    marginLeft: 0,
    marginRight: 0,
    '&>span:last-child': {
      width: '100%',
    },
  },
  voteLabel: {
    color: colors.proposalCardEndsColor,
  },
  vptText: {
    color: colors.proposalCardEndsColor,
  },
  vptMyText: {
    color: colors.primaryGreen,
    marginLeft: '4px',
  },
  vptPercent: {
    fontSize: '12px',
    fontWeight: 400,
    color: colors.claimCardBorderColor,
  },
  circleSmall: {
    height: '14px',
    width: '14px',
    borderRadius: '50%',
    backgroundColor: colors.primaryGreen,
  },
  disabledLabel: {
    color: `${colors.white} !important`,
    width: '100%',
  },
  labelContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  labelContentLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContentRight: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
})
