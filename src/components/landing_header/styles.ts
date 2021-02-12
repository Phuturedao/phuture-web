import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '52px',
    padding: '20px 30px',
    margin: 'auto',
    userSelect: 'none',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    ['@media (max-width:425px)']: {
      width: '120px',
    },
  },
  buttonStyles: {
    textDecoration: 'none',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 500,
    color: colors.white,
    width: '176px',
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
    ['@media (max-width:425px)']: {
      fontSize: '12px',
      width: '130px',
    },
  },
})
