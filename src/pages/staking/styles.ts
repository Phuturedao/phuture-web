import { makeStyles } from '@material-ui/core'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  rootBox: {
    justifyContent: 'center',
    display: 'flex',
  },
  rootTooltip: {
    background: colors.defaultCardBg,
    border: `1px solid ${colors.white}`,
    boxSizing: 'border-box',
    borderRadius: 6,
    padding: '4px 12px',
    marginBottom: 5,
    fontSize: '12px',
  },
  pageBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '660px',
  },
  title: {
    fontSize: '48px',
    lineHeight: '63px',
    fontFamily: 'Roboto Slab, serif',
    color: colors.white,
    maxWidth: '520px',
    textAlign: 'center',
    marginTop: '10px',
  },
  subtitle: {
    fontSize: '16px',
    lineHeight: '20px',
    color: colors.tableTextColor,
    maxWidth: '660px',
    textAlign: 'center',
    margin: '24px 0',
  },
  card: {
    backgroundColor: colors.defaultCardBg,
    width: '434px',
    borderRadius: '10px',
    padding: '16px',
    marginTop: '10px',
  },
  headingBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    fontSize: '24px',
    lineHeight: '29px',
    color: colors.white,
    fontWeight: 600,
    fontFamily: 'Inter',
  },
  headingIcon: {
    padding: '4px !important',
  },
  rootSlider: {
    marginTop: '30px',
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
  apyBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '40px 0 20px 0',
  },
  apyTitle: {
    color: colors.tableTitleColor,
    fontSize: '14px',
    lineHeight: '17px',
    textAlign: 'center',
  },
  apyValue: {
    color: colors.white,
    fontSize: '38px',
    lineHeight: '42px',
    textAlign: 'center',
  },
})
