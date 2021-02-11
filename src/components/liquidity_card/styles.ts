import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  cardContainer: {
    width: '394px',
    borderRadius: '10px',
    backgroundColor: colors.defaultCardBg,
    margin: '12px 0',
    padding: '20px',
  },
  cardTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  cardTitleText: {
    fontSize: '24px',
    fontWeight: 600,
  },
  cardTitleIcon: {
    padding: '4px !important',
  },
  sliderContainer: {
    marginTop: '36px',
  },
  sliderText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderTextTitle: {
    color: colors.tableTitleColor,
    fontWeight: 400,
    fontSize: '14px',
  },
  sliderTextValue: {
    color: colors.tableTextColor,
    fontWeight: 500,
    fontSize: '14px',
  },
  bottomButtonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  },
})
