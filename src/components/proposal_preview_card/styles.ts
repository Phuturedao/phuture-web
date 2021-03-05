import { makeStyles } from '@material-ui/core'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  root: {
    background: colors.defaultCardBg,
    borderRadius: '10px',
    margin: '15px 0',
    userSelect: 'none',
    cursor: 'pointer',
    transition: 'all 0.4s',
    width: '100%',
    '&:hover': {
      opacity: 0.6,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '16px',
    paddingBottom: '16px !important',
  },
  title: {
    fontSize: 24,
    color: colors.tableTextColor,
  },
  votesContainer: {
    height: '30px',
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  subtitlePositive: {
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.tablePositiveGreenColor,
    marginLeft: '6px',
  },
  subtitleNegative: {
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.tableNegativeRedColor,
    marginLeft: '6px',
  },
  endTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.cardEndTextColor,
    fontSize: '13px',
    lineHeight: '15px',
  },
})
