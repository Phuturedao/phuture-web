import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  buttonStyles: {
    textDecoration: 'none',
    textTransform: 'none',
    padding: '3px',
    fontSize: '16px',
    fontWeight: 500,
    color: colors.white,
    lineHeight: '20px',
    borderRadius: '10px',
    borderColor: colors.walletButtonBorderColor,
    transition: 'all 0.4s',
    '&:hover': {
      borderColor: colors.walletButtonBorderHoverColor,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
})
