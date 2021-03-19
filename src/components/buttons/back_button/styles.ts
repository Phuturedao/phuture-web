import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyles: {
    padding: '4px !important',
    marginRight: '8px',
  },
  textContainer: {
    fontSize: '20px',
    fontWeight: 500,
    color: colors.tableTextColor,
    lineHeight: '22px',
  },
})
