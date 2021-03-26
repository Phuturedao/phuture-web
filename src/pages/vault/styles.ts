import { makeStyles } from '@material-ui/core'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  rootBox: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    backgroundColor: colors.defaultCardBg,
    padding: '24px 20px',
    flexDirection: 'row',
    display: 'flex',
    borderRadius: '10px',
  },
  cardItem: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '40px',
  },
})
