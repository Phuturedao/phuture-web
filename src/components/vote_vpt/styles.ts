import { makeStyles } from '@material-ui/core/styles'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  rootTooltip: {
    background: colors.defaultCardBg,
    border: `1px solid ${colors.white}`,
    boxSizing: 'border-box',
    borderRadius: 6,
    padding: '4px 12px',
    marginBottom: 5,
    fontSize: '12px',
  },

  rootSlider: {
    marginTop: 50,
    color: colors.primaryButtonBgColor,
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
    boxShadow: colors.thumbShadow,
    boxSizing: 'border-box',
    width: 20,
    height: 20,
    marginTop: -7,
    marginLeft: -10,
  },
  percentsBox: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '40px',
  },
  percentText: {
    fontSize: '15px',
    color: colors.white,
  },
  stakedContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '28px',
  },
  staked: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stakedTitle: {
    color: colors.modalTitleColor,
    fontSize: '20px',
    lineHeight: '42px',
  },
  stakedValue: {
    color: colors.white,
    fontSize: '20px',
    lineHeight: '42px',
  },
})
