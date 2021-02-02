import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  buttonStyles: {
    textDecoration: 'none',
    textTransform: 'none',
    fontSize: '14px',
    color: colors.white,
    width: '155px',
    lineHeight: '17px',
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
