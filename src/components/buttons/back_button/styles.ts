import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '434px',
  },
  buttonStyles: {
    padding: '4px !important',
    marginRight: '8px',
  },
  textContainer: {
    fontSize: '16px',
    fontWeight: 500,
    color: colors.tableTextColor,
    lineHeight: '20px',
  },
})
