import { makeStyles } from '@material-ui/core'
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headLeftContainer: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '507px',
    boxSizing: 'border-box',
  },
  buttonsBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    margin: '16px 0',
  },
  indexButton: {
    textTransform: 'none',
    color: colors.white,
    fontSize: '18px',
    lineHeight: '22px',
    height: '63px',
    maxWidth: '249px',
    width: '-webkit-fill-available',
    backgroundColor: colors.defaultBlueColor,
    borderRadius: '50px',
  },
  phutureButton: {
    textTransform: 'none',
    color: colors.white,
    fontSize: '18px',
    lineHeight: '22px',
    height: '63px',
    maxWidth: '249px',
    width: '-webkit-fill-available',
    backgroundColor: 'transparent',
    borderRadius: '50px',
    border: `2px solid ${colors.white}`,
  },
  indexCard: {
    border: `2px solid ${colors.white}`,
    boxSizing: 'border-box',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '36px 50px',
  },
  cardTitle: {
    color: colors.grayTitleColor,
    fontSize: '24px',
    lineHeight: '30px',
  },
  cardValue: {
    color: colors.white,
    fontSize: '24px',
    lineHeight: '30px',
  },
  headRightContainer: {},
})
