import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  container: {
    padding: '0 40px 60px 40px',
    ['@media (max-width:550px)']: {
      padding: '20px 20px 40px 20px',
    },
  },
  firstContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    '@media (max-width: 670px)': {
      fontSize: '2.4rem',
      lineHeight: '40px',
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
    fontSize: '24px',
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
    maxWidth: '453px',
    '@media (max-width: 575px)': {
      marginTop: '40px',
    },
  },
  secondContainer: {
    marginTop: '12%',
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
      textAlign: 'center',
    },
  },
  secondTopTitle: {
    fontSize: '4rem',
    lineHeight: '78px',
    maxWidth: '525px',
    width: '-webkit-fill-available',
    color: colors.white,
    '@media (max-width: 1025px)': {
      fontSize: '2.5rem',
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
    maxWidth: '1139px',
    margin: '0 auto',
    '@media (max-width: 575px)': {
      marginTop: '20px',
    },
  },
  thirdContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5%',
    '@media (max-width: 575px)': {
      flexDirection: 'column',
      marginTop: '50px',
      justifyContent: 'center',
    },
  },
  thirdLeftContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '560px',
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
      textAlign: 'center',
    },
  },
  thirdImg: {
    marginTop: '-140px',
    maxWidth: '627px',
    maxHeight: '561px',
    '@media (max-width: 575px)': {
      marginTop: '20px',
      margin: '0 auto',
    },
  },
  fourthContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '-1%',
    '@media (max-width: 575px)': {
      marginTop: '50px',
    },
  },
  fourthRightContainer: {
    marginTop: '140px',
    display: 'flex',
    flexDirection: 'column',
    width: '46%',
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
    '@media (max-width: 740px)': {
      fontSize: '2.5rem',
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
      textAlign: 'center',
    },
  },
  fourthRightButtons: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width: 1100px)': {
      flexDirection: 'column',
    },
  },
  fourthImg: {
    maxWidth: '554px',
    '@media (max-width: 575px)': {
      margin: '0 auto',
    },
  },
  emailButton: {
    maxWidth: '385px',
    width: '-webkit-fill-available',
    minWidth: '320px',
    background: 'transparent',
    border: `2px solid ${colors.primaryButtonBgColor}`,
    color: `${colors.white} !important`,
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
    '@media (max-width: 1100px)': {
      marginRight: 0,
      width: '100%',
      maxWidth: '100%',
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
    '@media (max-width: 1100px)': {
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
    '@media (max-width: 1100px)': {
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
    '@media (max-width: 1100px)': {
      fontSize: '0.7rem',
      width: '100%',
      margin: 'auto',
    },
  },
  updatesTextBold: {
    fontFamily: 'GTWalsheim_Bold',
  },
  updatesCheckbox: {
    alignSelf: 'flex-start',
    padding: 0,
  },
  labelStyles: {
    justifyContent: 'space-between',
    marginLeft: '0px',
    width: '100%',
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
  partnersContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  partnersTitle: {
    fontSize: '4rem',
    lineHeight: '79px',
    color: colors.white,
    marginBottom: '20px',
    marginTop: '20px',
    '@media (max-width: 575px)': {
      fontSize: '2.5rem',
      margin: '30px 0',
      lineHeight: '50px',
    },
  },
  partnerItem: {
    display: 'flex',
    alignItems: 'center',
    height: '83px',
    color: colors.white,
    transition: 'all 0.4s',
    '&:hover': {
      textDecoration: 'none',
      opacity: 0.6,
    },
  },
  threeItemsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1010px',
    width: '-webkit-fill-available',
    height: '150px',
  },
  fourItemsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    width: '-webkit-fill-available',
    height: '150px',
  },
  twoItemsRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 40px',
    margin: '20px 0',
  },
  oneItem: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
    transition: 'all 0.4s',
    '&:hover': {
      textDecoration: 'none',
      opacity: 0.6,
    },
  },
  angelsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '600px',
    marginTop: '50px',
    margin: '40px auto',
    ['@media (max-width:550px)']: {
      flexDirection: 'column',
    },
  },
  angelItem: {
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.4s',
    '&:hover': {
      textDecoration: 'none',
      opacity: 0.6,
    },
    ['@media (max-width:550px)']: {
      margin: '40px',
    },
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '150px',
    '@media (max-width: 870px)': {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      marginTop: '50px',
    },
  },
  footerIconsContainer: {
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px',
    '@media (max-width: 870px)': {
      marginBottom: '30px',
    },
    ['@media (max-width:550px)']: {
      marginTop: '24px',
    },
  },
  iconsMargin: {
    marginRight: '12px',
    transition: 'all 0.4s',
    '&:hover': {
      opacity: 0.6,
    },
  },
  privacyLink: {
    color: colors.secondaryGray,
    fontSize: '18px',
    transition: 'all 0.4s',
    textTransform: 'none',
    textDecoration: 'none',
    margin: '15px 0 0 0',
    cursor: 'pointer',
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
    '@media (max-width: 870px)': {
      margin: '30px 0',
    },
    ['@media (max-width:550px)']: {
      margin: '30px 0 10px 0',
    },
  },
})
