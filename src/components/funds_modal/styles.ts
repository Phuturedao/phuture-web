import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  stakedContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '24px 0 28px 0',
  },
  staked: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  stakedTitle: {
    color: colors.tableTitleColor,
    fontSize: '20px',
    lineHeight: '42px',
  },
  stakedValue: {
    color: colors.tableTextColor,
    fontSize: '20px',
    lineHeight: '42px',
    marginLeft: '4px',
  },
})
