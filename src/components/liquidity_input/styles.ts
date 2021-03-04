import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  rootTextField: {
    border: '1px solid #5C7684',
    marginTop: 8,
    height: '95px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: 6,
    '&>div': {
      height: '95px',
      boxShadow: 'none',
      '&>input': {
        marginTop: '30px',
        fontSize: '38px',
        fontFamily: 'Inter sans-serif',
        color: colors.tableTitleColor,
        //INFO: I need it fontFeatureSettings: `"smcp" 1, "zero" 1`,
      },
      '&>fieldset': {
        borderWidth: '0px !important',
      },
    },
  },
  inputLabel: {
    position: 'absolute',
    marginTop: '24px',
    marginLeft: '16px',
    fontSize: '14px',
    fontWeight: 500,
    color: colors.tableTitleColor,
  },
  endAdornmentContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  endAdornmentIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
  },
  endAdornmentIconText: {
    color: colors.tableTextColor,
    fontSize: '30px',
    fontWeight: 400,
    marginRight: '12px',
    marginLeft: '8px',
  },
})
