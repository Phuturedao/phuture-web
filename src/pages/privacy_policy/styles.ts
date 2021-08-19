import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  container: {
    padding: '0 40px 60px 40px',
    ['@media (max-width:550px)']: {
      padding: '20px 20px 40px 20px',
    },
  },
  h1Styles: {
    marginBottom: '50px',
    textAlign: 'center',
  },
  cookiesBox: {
    display: 'flex',
    justifyContent: 'center',
  },
  blueLink: {
    color: colors.primaryBlue,
    transition: 'all 0.4s',
    textTransform: 'none',
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.6,
      textTransform: 'none',
      textDecoration: 'none',
    },
    '&:active': {
      opacity: 0.3,
      textTransform: 'none',
      textDecoration: 'none',
    },
  },
})
