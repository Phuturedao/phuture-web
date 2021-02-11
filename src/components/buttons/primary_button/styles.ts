import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  buttonStyles: {
    textDecoration: 'none',
    textTransform: 'none',
    fontSize: '16px',
    lineHeight: '20px',
    backgroundColor: colors.primaryButtonBgColor,
    borderRadius: '10px',
    transition: 'all 0.4s',
    '&:hover': {
      backgroundColor: colors.primaryButtonBgHoverColor,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
})
