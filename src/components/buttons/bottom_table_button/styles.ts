import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  buttonStyles: {
    textDecoration: 'none',
    textTransform: 'none',
    padding: '7px',
    fontSize: '16px',
    fontWeight: 500,
    color: colors.white,
    width: '170px',
    lineHeight: '20px',
    borderRadius: '10px',
    borderColor: colors.walletButtonBorderHoverColor,
    transition: 'all 0.4s',
    '&:hover': {
      borderColor: colors.walletButtonBorderColor,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
})
