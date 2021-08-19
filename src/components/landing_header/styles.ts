import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: '52px',
    padding: '78px 0',
    margin: 'auto',
    userSelect: 'none',
    fontFamily: 'GTWalsheim',
    maxWidth: '1200px',
    '@media (max-width: 900px)': {
      padding: '40px 0',
    },
    '@media (max-width: 670px)': {
      flexDirection: 'column',
      height: 'auto',
      padding: '20px 0',
    },
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
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
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 670px)': {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
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
    '@media (max-width: 670px)': {
      width: '100%',
      marginRight: 0,
      margin: '16px 0',
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
    '@media (max-width: 670px)': {
      width: '100%',
    },
  },
  disabledAppButton: {
    background: colors.defaultGrey,
    color: `${colors.black} !important`,
    opacity: 1,
    border: 'none',
  },
  blogButtonContainer: {
    textTransform: 'none',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
    '@media (max-width: 670px)': {
      width: '100%',
    },
  },
})
