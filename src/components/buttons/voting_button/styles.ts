import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  buttonStyles: {
    textDecoration: 'none',
    textTransform: 'none',
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 500,
    borderRadius: '30px',
    backgroundColor: colors.primaryButtonBgColor,
    transition: 'all 0.4s',
    '&:hover': {
      backgroundColor: colors.primaryButtonBgColor,
      opacity: 0.8,
    },
    '&:active': {
      backgroundColor: colors.primaryButtonBgColor,
      opacity: 0.5,
    },
  },
})
