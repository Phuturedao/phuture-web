import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  buttonStyles: {
    textDecoration: 'none',
    textTransform: 'none',
    fontSize: '14px',
    lineHeight: '16px',
    backgroundColor: colors.primaryButtonBgColor,
    borderRadius: '15px',
    transition: 'all 0.4s',
    margin: '0 4px',
    '&:hover': {
      backgroundColor: colors.primaryButtonBgHoverColor,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
})
