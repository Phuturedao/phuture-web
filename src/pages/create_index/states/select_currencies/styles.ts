import { makeStyles } from '@material-ui/core'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  selectCurrenciesCard: {
    backgroundColor: colors.defaultCardBg,
    width: '100%',
    borderRadius: '10px',
    padding: '8px 0',
    marginTop: '10px',
  },
  inputContainer: {
    padding: '16px',
  },
  input: {
    border: `1px solid ${colors.secondaryCardText}`,
    borderRadius: '2px',
    width: '100%',
    '&>div': {
      boxShadow: 'none',
      '&>input': {
        color: colors.white,
        padding: '8px 12px',
      },
      '&>fieldset': {
        border: 'none !important',
      },
    },
  },
  selectCurrenciesTabs: {
    display: 'flex',
    flexDirection: 'row',
    margin: '8px 12px',
  },
  selectCurrenciesOption: {
    color: colors.tableTitleColor,
    fontSize: '14px',
    lineHeight: '17px',
    textAlign: 'left',
    marginLeft: '16px',
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
    '&:hover': {
      background: colors.itemHoverBg,
    },
    '&:active': {
      opacity: 0.6,
      background: colors.itemHoverBg,
    },
  },
  currencyIconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currenciesItemText: {
    color: colors.tableTextColor,
    padding: '0 16px',
    fontSize: '16px',
    lineHeight: '20px',
  },
  checkboxContainer: {
    width: '20px',
    height: '20px',
    border: `2px solid ${colors.primaryButtonBgColor}`,
    borderRadius: '50%',
  },
  currenciesContinueButton: {
    borderTop: `1px solid ${colors.cardEndTextColor}`,
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '16px',
  },
})
