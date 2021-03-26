import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '70px',
    padding: '20px 30px',
    margin: 'auto',
    userSelect: 'none',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '320px',
  },
  navBarContainer: {
    width: '35vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ulList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
  },
  navLinkContainer: {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    transition: 'all 0.4s',
    textDecoration: 'none',
    '&>span': {
      color: colors.white,
      opacity: 0.3,
      marginRight: '6px',
      fontSize: '18px',
    },
    '&:hover': {
      opacity: 0.6,
    },
  },
  navLinkActiveContainer: {
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    transition: 'all 0.4s',
    textDecoration: 'none',
    '&>span': {
      color: colors.white,
      opacity: 1,
      marginRight: '6px',
      fontSize: '18px',
      transition: 'all 0.4s',
    },
    '&:hover': {
      opacity: 0.8,
    },
  },
  searchIcon: {
    width: '33px',
    height: '33px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.4s',
    backgroundColor: colors.searchIconBg,
    marginRight: '10px',
    '&:hover': {
      backgroundColor: colors.searchIconHoverBg,
    },
    '&>img': {
      margin: '4.5px',
    },
    '&:active': {
      opacity: 0.3,
    },
  },
  balanceBox: {
    height: '33px',
    backgroundColor: colors.defaultCardBg,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '8px',
    padding: '0 10px',
    margin: '0 8px',
    cursor: 'pointer',
    transition: 'all 0.4s',
    '&:hover': {
      opacity: 0.6,
    },
    '&:active': {
      opacity: 0.3,
    },
  },
  blueBox: {
    height: '5px',
    width: '5px',
    borderRadius: '50%',
    backgroundColor: colors.primaryButtonBgColor,
  },
  balanceText: {
    fontSize: '16px',
    lineHeight: '20px',
    color: colors.white,
    marginLeft: '6px',
  },
})
