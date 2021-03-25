import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  content: {
    textAlign: 'center',
    padding: '0 0 50px',
    width: '434px',
    height: '625px',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  input: {
    border: `1px solid ${colors.secondaryCardText}`,
    color: colors.secondaryCardText,
    borderRadius: '2px',
    width: '100%',
    '&>div': {
      boxShadow: 'none',
      '&>input': {
        color: colors.secondaryCardText,
      },
      '&>fieldset': {
        border: 'none !important',
      },
    },
  },
  cardsTitle: {
    padding: '16px 0 8px 0',
    fontSize: '14px',
    color: colors.tableTitleColor,
    textAlign: 'left',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 0',
    marginBottom: '4px',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.5,
    },
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconTitle: {
    fontSize: '16px',
    color: colors.tableTextColor,
  },
  icon: {
    marginRight: '16px',
  },
})
