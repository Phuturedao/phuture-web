import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  buttonStyles: {
    textDecoration: 'none',
    textTransform: 'none',
    fontSize: '16px',
    lineHeight: '20px',
    borderRadius: '10px',
    transition: 'all 0.4s',
    width: '100%',
    height: '48px',
    border: 'none',
    margin: '4px 0',
    '&:hover': {
      backgroundColor: colors.primaryButtonBgHoverColor,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
})
