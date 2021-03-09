import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  title: {
    fontSize: '14px',
    lineHeight: '17px',
    color: colors.primaryGrayTextColor,
  },
  blockInputHeader: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blockBalance: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&>span': {
      fontSize: 14,
      lineHeight: '17px',
      color: colors.white,
    },
  },
  rootTooltip: {
    background: colors.optionCardBg,
    border: `1px solid ${colors.white}`,
    boxSizing: 'border-box',
    borderRadius: 6,
    padding: '4px 12px',
    marginBottom: 5,
  },
})
