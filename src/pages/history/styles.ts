import { makeStyles } from '@material-ui/core'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  paginationBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
    userSelect: 'none',
    width: '100%',
  },
  title: {
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    color: colors.tableTextColor,
    marginLeft: '6px',
  },
})
