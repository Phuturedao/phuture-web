import { makeStyles } from '@material-ui/core'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  sectorCard: {
    backgroundColor: colors.defaultCardBg,
    width: '474px',
    borderRadius: '10px',
    padding: '8px',
    textAlign: 'center',
    margin: '10px',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  card: {
    height: '231px',
    width: '215px',
    margin: '8px',
    boxSizing: 'border-box',
    borderRadius: '8px',
    border: `1px solid ${colors.cardEndTextColor}`,
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    alignItems: 'center',
    transition: 'all 0.4s',
    '&:hover': {
      background: `rgba(76, 201, 240, 0.1)`,
      border: `1px solid ${colors.primaryButtonBgHoverColor}`,
    },
    '&:active': {
      background: `rgba(76, 201, 240, 0.1)`,
      border: `1px solid ${colors.primaryButtonBgHoverColor}`,
      opacity: 0.3,
    },
  },
  disabledCard: {
    height: '231px',
    width: '215px',
    margin: '8px',
    boxSizing: 'border-box',
    borderRadius: '8px',
    border: `1px solid ${colors.cardEndTextColor}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0.5,
  },
  blueBox: {
    width: '78px',
    height: '78px',
    marginTop: '44px',
    marginBottom: '32px',
    borderRadius: '14px',
    opacity: 0.9,
    backgroundColor: colors.primaryButtonBgColor,
  },
  optionText: {
    color: colors.tableTextColor,
    fontSize: '16px',
    lineHeight: '20px',
  },
  manuallyBox: {
    padding: '24px',
  },
  manuallyText: {
    color: colors.primaryButtonBgColor,
    fontSize: '16px',
    lineHeight: '20px',
    cursor: 'pointer',
    transition: 'all 0.4s',
    '&:hover': {
      opacity: 0.6,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
})
