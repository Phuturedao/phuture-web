import { makeStyles } from '@material-ui/core'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  card: {
    backgroundColor: colors.defaultCardBg,
    width: '434px',
    borderRadius: '10px',
    padding: '8px',
    margin: '10px',
  },
  title: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '434px',
    color: colors.tableTextColor,
    fontSize: '20px',
    margin: '12px 0',
    fontWeight: 500,
  },
  tableTitleBox: {
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
  },
  currenciesListItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '54px',
    borderTop: `1px solid ${colors.cardEndTextColor}`,
    padding: '12px 18px 12px 16px',
    transition: 'all 0.4s',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7,
      background: `rgba(76, 201, 240, 0.1)`,
    },
    '&:active': {
      opacity: 0.2,
      background: `rgba(76, 201, 240, 0.1)`,
    },
  },
  currencyIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  currenciesItemText: {
    color: colors.tableTextColor,
    padding: '0 16px',
    fontSize: '16px',
    lineHeight: '20px',
  },
  table: {
    padding: '16px 0',
    width: '434px',
    borderRadius: '10px',
    border: `1px solid ${colors.tableTitleColor}`,
  },
  weightBox: {
    color: colors.tableTextColor,
    display: 'flex',
    flexDirection: 'row',
    minWidth: '50px',
    justifyContent: 'flex-end',
  },
})
