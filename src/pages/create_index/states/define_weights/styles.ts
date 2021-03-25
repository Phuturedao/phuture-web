import { makeStyles } from '@material-ui/core'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  card: {
    backgroundColor: colors.defaultCardBg,
    width: '660px',
    borderRadius: '10px',
    padding: '8px 0',
    margin: '10px',
  },
  titleBox: {
    color: colors.tableTitleColor,
    fontSize: '14px',
    margin: '12px 16px',
  },
  currenciesListItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '54px',
    borderTop: `1px solid ${colors.cardEndTextColor}`,
    padding: '12px 18px 12px 16px',
    transition: 'all 0.4s',
    cursor: 'pointer',
  },
  currencyIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  currenciesItemText: {
    color: colors.tableTextColor,
    padding: '0 16px',
    fontSize: '16px',
    lineHeight: '20px',
  },
  rootSlider: {
    // marginTop: 50,
    color: colors.primaryButtonBgColor,
    width: '200px',
    margin: '0 10px',
    opacity: 1,
  },
  railSlider: {
    height: 6,
    borderRadius: 30,
  },
  trackSlider: {
    height: 6,
    borderRadius: 30,
    background: colors.primaryButtonBgColor,
  },
  thumbColorPrimary: {
    background: colors.primaryButtonBgColor,
    border: `2px solid ${colors.defaultCardBg}`,
    boxShadow: `0px 0px 1px 0.5px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.1)`,
    boxSizing: 'border-box',
    width: 20,
    height: 20,
    marginTop: -7,
    marginLeft: -10,
  },
  rootTextField: {
    border: `1px solid ${colors.cardEndTextColor}`,
    height: '32px',
    width: '80px',
    boxSizing: 'border-box',
    borderRadius: 6,
    margin: '0 20px',
    '&>div': {
      height: '32px',
      boxShadow: 'none',
      '&>input': {
        fontSize: '16px',
        fontFamily: 'Inter',
        color: colors.tableTitleColor,
      },
      '&>fieldset': {
        borderWidth: '0px !important',
      },
    },
  },
  endInputIcon: {
    color: colors.cardEndTextColor,
    fontSize: '16px',
    lineHeight: '20px',
  },
  currenciesContinueButton: {
    borderTop: `1px solid ${colors.cardEndTextColor}`,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '16px',
  },
})
