import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  buttonStyles: {
    textDecoration: 'none',
    textTransform: 'none',
    fontSize: '20px',
    lineHeight: '34px',
    borderRadius: '10px',
    transition: 'all 0.4s',
    width: '100%',
    height: '56px',
    border: 'none',
    margin: '6px 0',
    '&:hover': {
      backgroundColor: colors.primaryButtonBgHoverColor,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
})
