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
    fontFamily: 'GTWalsheim',
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
  blogButton: {
    borderColor: colors.mainGreen,
    borderWidth: '2px',
    color: colors.white,
    textDecoration: 'none',
    textTransform: 'none',
    fontSize: '1.13rem',
    lineHeight: '22px',
    borderRadius: '10px',
    height: '49px',
    marginRight: '12px',
    width: '123px',
    transition: 'all 0.4s',
    '&:hover': {
      background: 'transparent',
      opacity: 0.7,
    },
    '&:active': {
      background: 'transparent',
      opacity: 0.3,
    },
  },
  appButton: {
    textDecoration: 'none',
    textTransform: 'none',
    fontSize: '1.13rem',
    fontWeight: 500,
    color: colors.white,
    background: colors.blueButtonGradient,
    border: 'none',
    width: '193px',
    height: '49px',
    lineHeight: '22px',
    borderRadius: '10px',
    transition: 'all 0.4s',
    '&:hover': {
      background: colors.blueButtonGradient,
      opacity: 0.7,
    },
    '&:active': {
      background: colors.blueButtonGradient,
      opacity: 0.3,
    },
    ['@media (max-width:425px)']: {
      fontSize: '12px',
      width: '130px',
    },
  },
  buttonContainer: {
    textTransform: 'none',
    textDecoration: 'none',
    marginTop: '40px',
    '&:hover': {
      textDecoration: 'none',
    },
  },
})
