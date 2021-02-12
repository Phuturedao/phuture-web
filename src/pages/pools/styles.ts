import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  title: {
    userSelect: 'none',
    fontFamily: 'Roboto Slab, serif',
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: '63px',
    color: colors.white,
    textAlign: 'center',
  },
  subtitle: {
    userSelect: 'none',
    fontWeight: 500,
    lineHeight: '28px',
    fontSize: '18px',
    color: colors.tableTextColor,
    opacity: 0.9,
    textAlign: 'center',
    maxWidth: '630px',
    margin: '0 auto',
    padding: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4px',
    marginBottom: '40px',
  },
})
