import { makeStyles } from '@material-ui/core'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  sectorCard: {
    backgroundColor: colors.defaultCardBg,
    width: '100%',
    borderRadius: '10px',
    padding: '8px',
    textAlign: 'center',
    marginTop: '10px',
  },
  cardItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '87px',
    borderRadius: '8px',
    margin: '8px',
    padding: '18px',
    transition: 'all 0.4s',
    cursor: 'pointer',
    '&:hover': {
      background: colors.itemHoverBg,
      border: `1px solid ${colors.primaryButtonBgHoverColor}`,
    },
    '&:active': {
      background: colors.itemHoverBg,
      border: `1px solid ${colors.primaryButtonBgHoverColor}`,
      opacity: 0.3,
    },
  },
  cardText: {
    color: colors.tableTextColor,
    padding: '18px',
    fontSize: '18px',
    lineHeight: '28px',
  },
  continueButton: {
    margin: '20px',
  },
  continueText: {
    color: colors.primaryButtonBgColor,
    fontSize: '16px',
    lineHeight: '20px',
    transition: 'all 0.4s',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.6,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
})
