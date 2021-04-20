import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  container: {
    padding: '80px 40px 60px 40px',
    ['@media (max-width:550px)']: {
      padding: '20px 20px 40px 20px',
    },
  },
  firstContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    '@media (max-width: 575px)': {
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 0,
    },
  },
  firstLeftContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  firstTitle: {
    fontSize: '4rem',
    lineHeight: '79px',
    color: colors.white,
    fontWeight: 600,
    maxWidth: '686px',
    textTransform: 'uppercase',
    '@media (max-width: 1025px)': {
      fontSize: '3rem',
      lineHeight: '59px',
    },
    '@media (max-width: 575px)': {
      fontSize: '2.2rem',
      lineHeight: '40px',
      textAlign: 'center',
    },
  },
  buttonContainer: {
    textTransform: 'none',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
    '@media (max-width: 575px)': {
      margin: '0 auto',
    },
  },
  button: {
    width: '190px',
    height: '52px',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 500,
    color: colors.white,
    lineHeight: '20px',
    textTransform: 'none',
    textDecoration: 'none',
    borderColor: colors.primaryButtonBgColor,
    transition: 'all 0.4s',
    '&:hover': {
      borderColor: colors.primaryButtonBgColor,
      opacity: 0.6,
    },
    '&:active': {
      borderColor: colors.primaryButtonBgColor,
      opacity: 0.3,
    },
  },
  firstImg: {
    width: '50%',
    '@media (max-width: 575px)': {
      width: '80%',
      marginTop: '40px',
    },
  },
  secondContainer: {
    marginTop: '22%',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 575px)': {
      marginTop: '60px',
    },
  },
  secondTopContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '@media (max-width: 575px)': {
      flexDirection: 'column-reverse',
    },
  },
  secondTopText: {
    fontSize: '1.5rem',
    lineHeight: '30px',
    maxWidth: '623px',
    marginTop: '10px',
    color: colors.white,
    '@media (max-width: 1025px)': {
      fontSize: '1.2rem',
      lineHeight: '24px',
    },
    '@media (max-width: 575px)': {
      fontSize: '1rem',
      lineHeight: '18px',
      marginTop: '20px',
    },
  },
  secondTopTitle: {
    fontSize: '4rem',
    lineHeight: '78px',
    maxWidth: '525px',
    color: colors.white,
    '@media (max-width: 1025px)': {
      fontSize: '3rem',
      lineHeight: '59px',
    },
    '@media (max-width: 575px)': {
      fontSize: '2.2rem',
      lineHeight: '40px',
      textAlign: 'center',
    },
  },
  secondImg: {
    marginTop: '-20px',
    width: '100%',
    '@media (max-width: 575px)': {
      marginTop: '20px',
    },
  },
  thirdContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '27%',
    '@media (max-width: 575px)': {
      flexDirection: 'column',
      marginTop: '50px',
      justifyContent: 'center',
    },
  },
  thirdLeftContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '550px',
  },
  thirdLeftTitle: {
    fontSize: '4rem',
    lineHeight: '78px',
    color: colors.white,
    '@media (max-width: 1025px)': {
      fontSize: '3rem',
      lineHeight: '59px',
    },
    '@media (max-width: 575px)': {
      fontSize: '2.2rem',
      lineHeight: '40px',
      textAlign: 'center',
    },
  },
  thirdLeftText: {
    fontSize: '1.5rem',
    lineHeight: '30px',
    marginTop: '35px',
    color: colors.white,
    '@media (max-width: 1025px)': {
      fontSize: '1.2rem',
      lineHeight: '24px',
    },
    '@media (max-width: 575px)': {
      fontSize: '1rem',
      lineHeight: '18px',
      marginTop: '20px',
    },
  },
  thirdImg: {
    width: '50%',
    marginTop: '-100px',
    '@media (max-width: 575px)': {
      marginTop: '20px',
      width: '80%',
      margin: '0 auto',
    },
  },
  fourthContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '23%',
    '@media (max-width: 575px)': {
      marginTop: '50px',
    },
  },
  fourthRightContainer: {
    marginTop: '140px',
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    '@media (max-width: 575px)': {
      width: '100%',
      marginTop: 0,
    },
  },
  fourthRightTitle: {
    fontSize: '4rem',
    lineHeight: '78px',
    color: colors.white,
    '@media (max-width: 1025px)': {
      fontSize: '3rem',
      lineHeight: '59px',
    },
    '@media (max-width: 575px)': {
      fontSize: '2.2rem',
      lineHeight: '40px',
      textAlign: 'center',
    },
  },
  fourthRightText: {
    fontSize: '1.5rem',
    lineHeight: '30px',
    marginTop: '35px',
    color: colors.white,
    '@media (max-width: 1025px)': {
      fontSize: '1.2rem',
      lineHeight: '24px',
    },
    '@media (max-width: 575px)': {
      fontSize: '1rem',
      lineHeight: '18px',
      marginTop: '20px',
    },
  },
  fourthRightButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '75px',
    '@media (max-width: 769px)': {
      flexDirection: 'column',
      marginTop: '30px',
    },
  },
  fourthImg: {
    width: '50%',
    '@media (max-width: 575px)': {
      width: '70%',
      margin: '0 auto',
    },
  },
  emailButton: {
    maxWidth: '385px',
    width: '-webkit-fill-available',
    background: 'transparent',
    border: `2px solid ${colors.primaryButtonBgColor}`,
    color: colors.white,
    textTransform: 'none',
    textDecoration: 'none',
    marginRight: '12px',
    borderRadius: '6px',
    fontSize: '1.13rem',
    transition: 'all 0.4s',
    textAlign: 'center',
    height: '53px',
    outline: 'none',
    '&:hover': {
      opacity: 0.7,
    },
    '&:active': {
      opacity: 0.3,
    },
    '&:after': {
      borderBottom: 'none',
    },
    '@media (max-width: 769px)': {
      marginRight: 0,
    },
  },
  subscribeButton: {
    minWidth: '169px',
    color: colors.white,
    background: colors.blueButtonGradient,
    textTransform: 'none',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '1.13rem',
    transition: 'all 0.4s',
    height: '53px',
    '&:hover': {
      background: colors.blueButtonGradient,
      opacity: 0.7,
    },
    '&:active': {
      background: colors.blueButtonGradient,
      opacity: 0.3,
    },
    '@media (max-width: 769px)': {
      marginTop: '16px',
      width: '100%',
    },
  },
  updatesBox: {
    marginTop: '14px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '169px',
    '@media (max-width: 769px)': {
      marginTop: '20px',
      width: '100%',
    },
  },
  updatesText: {
    fontSize: '0.63rem',
    lineHeight: '12px',
    fontWeight: 400,
    color: colors.white,
    width: '130px',
    '@media (max-width: 769px)': {
      fontSize: '0.7rem',
      width: '100%',
    },
  },
  updatesTextBold: {
    fontFamily: 'GTWalsheim_Bold',
  },
  updatesCheckbox: {
    alignSelf: 'flex-start',
    padding: 0,
  },
  title: {
    userSelect: 'none',
    fontSize: '58px',
    fontWeight: 500,
    lineHeight: '63px',
    color: colors.white,
    textAlign: 'center',
    textShadow: `0px 0px 50px ${colors.textShadowColor}`,
    ['@media (max-width:425px)']: {
      fontSize: '28px',
      lineHeight: '45px',
    },
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '32px',
    ['@media (max-width:550px)']: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  footerIconsContainer: {
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    ['@media (max-width:550px)']: {
      marginTop: '24px',
    },
  },
  iconsMargin: {
    marginRight: '12px',
  },
})
