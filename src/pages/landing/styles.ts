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
    marginTop: '120px',
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
  },
  secondContainer: {
    marginTop: '220px',
    display: 'flex',
    flexDirection: 'column',
  },
  secondTopContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  secondTopText: {
    fontSize: '1.5rem',
    lineHeight: '30px',
    maxWidth: '623px',
    marginTop: '10px',
    color: colors.white,
  },
  secondTopTitle: {
    fontSize: '4rem',
    lineHeight: '78px',
    maxWidth: '525px',
    color: colors.white,
  },
  thirdContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '200px',
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
  },
  thirdLeftText: {
    fontSize: '1.5rem',
    lineHeight: '30px',
    marginTop: '35px',
    color: colors.white,
  },
  fourthContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '180px',
  },
  fourthRightContainer: {
    marginTop: '200px',
    display: 'flex',
    flexDirection: 'column',
  },
  fourthRightTitle: {
    fontSize: '4rem',
    lineHeight: '78px',
    color: colors.white,
  },
  fourthRightText: {
    fontSize: '1.5rem',
    lineHeight: '30px',
    marginTop: '35px',
    color: colors.white,
  },
  fourthRightButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '75px',
  },
  emailButton: {
    width: '279px',
    background: 'transparent',
    border: `2px solid ${colors.primaryButtonBgColor}`,
    color: colors.white,
    textTransform: 'none',
    textDecoration: 'none',
    marginRight: '12px',
    borderRadius: '6px',
    fontSize: '1.13rem',
    transition: 'all 0.4s',
    '&:hover': {
      opacity: 0.7,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
  subscribeButton: {
    width: '279px',
    color: colors.white,
    background: colors.blueButtonGradient,
    textTransform: 'none',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '1.13rem',
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
  buttonContainer: {
    textTransform: 'none',
    textDecoration: 'none',
    marginTop: '40px',
    '&:hover': {
      textDecoration: 'none',
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
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
    marginRight: '30px',
  },
})
