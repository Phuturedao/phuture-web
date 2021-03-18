import { makeStyles } from '@material-ui/core'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  rootContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    userSelect: 'none',
  },

  //Select sector styles
  selectSectorCard: {
    backgroundColor: colors.defaultCardBg,
    width: '434px',
    borderRadius: '10px',
    padding: '8px',
    textAlign: 'center',
    margin: '10px',
  },
  cardItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '87px',
    borderRadius: '8px',
    margin: '8px',
    padding: '18px',
    transition: 'all 0.4s',
    cursor: 'pointer',
    '&:hover': {
      background: `rgba(76, 201, 240, 0.1)`,
      border: `1px solid ${colors.primaryButtonBgHoverColor}`,
    },
    '&:active': {
      background: `rgba(76, 201, 240, 0.1)`,
      border: `1px solid ${colors.primaryButtonBgHoverColor}`,
      opacity: 0.3,
    },
  },
  cardText: {
    color: colors.tableTextColor,
    padding: '18px',
    fontSize: '18px',
    lineHeight: '28px',
  },
  continueButton: {
    margin: '20px',
  },
  continueText: {
    color: colors.primaryButtonBgColor,
    fontSize: '16px',
    lineHeight: '20px',
    transition: 'all 0.4s',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.6,
    },
    '&:active': {
      opacity: 0.3,
    },
  },

  //Select sector currencies
  selectCurrenciesCard: {
    backgroundColor: colors.defaultCardBg,
    width: '434px',
    borderRadius: '10px',
    padding: '8px 0',
    margin: '10px',
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
        borderWidth: '0px !important',
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
      background: `rgba(76, 201, 240, 0.1)`,
    },
    '&:active': {
      opacity: 0.6,
      background: `rgba(76, 201, 240, 0.1)`,
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
