import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  container: {
    padding: '80px 60px 120px 60px',
    ['@media (max-width:550px)']: {
      padding: '20px 20px 40px 20px',
    },
  },
  headContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    userSelect: 'none',
    fontFamily: 'Roboto Slab, serif',
    fontSize: '58px',
    fontWeight: 500,
    lineHeight: '107px',
    color: colors.white,
    textAlign: 'center',
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
    width: '140px',
    height: '48px',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 500,
    color: colors.white,
    lineHeight: '20px',
    textTransform: 'none',
    textDecoration: 'none',
    borderColor: colors.walletButtonBorderHoverColor,
    transition: 'all 0.4s',
    '&:hover': {
      borderColor: colors.walletButtonBorderColor,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
  cards: {
    marginTop: '98px',
    marginBottom: '88px',
    display: 'flex',
    flexDirection: 'row',
    margin: '0 auto',
    width: 'auto',
    maxWidth: '892px',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    ['@media (max-width:1020px)']: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    ['@media (max-width:425px)']: {
      marginTop: '40px',
      marginBottom: '40px',
    },
  },
  cardContainer: {
    width: '394px',
    height: '364px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.defaultCardBg,
    marginBottom: '24px',
    padding: '54px 20px 20px 20px',
    textAlign: 'center',
    ['@media (max-width:550px)']: {
      padding: '30px 20px 20px 20px',
      width: '80%',
    },
  },
  cardTitle: {
    fontSize: '32px',
    fontFamily: 'Roboto Slab, serif',
    color: colors.white,
    marginTop: '24px',
    lineHeight: '34px',
    ['@media (max-width:425px)']: {
      fontSize: '25px',
      lineHeight: '28px',
    },
  },
  cardText: {
    fontSize: '16px',
    fontFamily: 'Inter',
    color: colors.tableTextColor,
    opacity: 0.9,
    marginTop: '24px',
    lineHeight: '25px',
    ['@media (max-width:425px)']: {
      marginTop: '12px',
      fontSize: '15px',
      lineHeight: '17px',
    },
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    ['@media (max-width:550px)']: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  footerEmail: {
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 400,
    color: colors.tableTextColor,
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
