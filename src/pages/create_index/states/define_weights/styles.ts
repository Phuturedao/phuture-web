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
    justifyContent: 'space-between',
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
    // width: '200px',
  },
  thumbColorPrimary: {
    background: colors.primaryButtonBgColor,
    boxShadow: `0px 0px 1px 0.5px rgba(0, 0, 0, 0.2), 0px 0px 4px rgba(0, 0, 0, 0.1)`,
    boxSizing: 'border-box',
    width: 20,
    height: 20,
    marginTop: -7,
    marginLeft: -10,
  },
})
