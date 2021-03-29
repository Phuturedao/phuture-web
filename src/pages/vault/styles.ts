import { makeStyles } from '@material-ui/core'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  rootBox: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  categoryTitle: {
    fontSize: '24px',
    lineHeight: '29px',
    color: colors.tableTextColor,
    fontWeight: 600,
  },
  card: {
    backgroundColor: colors.defaultCardBg,
    padding: '24px 20px',
    flexDirection: 'row',
    display: 'flex',
    borderRadius: '10px',
    marginBottom: '24px',
    marginTop: '12px',
    alignItems: 'center',
  },
  textBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonsBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '&>button': {
      margin: '0 4px',
    },
  },
  cardItem: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '40px',
  },
  cardSector: {
    fontSize: '14px',
    lineHeight: '17px',
    fontWeight: 500,
    color: colors.tableTitleColor,
  },
  cardValue: {
    fontSize: '20px',
    lineHeight: '23px',
    fontWeight: 600,
    color: colors.tableTextColor,
    letterSpacing: '-0.02em',
    marginTop: '7px',
  },
  cardCustomValue: {
    fontSize: '20px',
    lineHeight: '23px',
    fontWeight: 600,
    color: colors.tablePositiveGreenColor,
    letterSpacing: '-0.02em',
    marginTop: '7px',
  },
})
