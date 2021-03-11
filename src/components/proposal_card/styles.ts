import { makeStyles } from '@material-ui/core'
import { colors } from 'utils/mui'

export const useStyles = makeStyles({
  root: {
    background: colors.defaultCardBg,
    borderRadius: '10px',
    margin: '15px 0',
    userSelect: 'none',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '16px !important',
  },
  title: {
    fontSize: 24,
    color: colors.white,
  },
  subtitle: {
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.walletButtonTextColor,
    marginLeft: '6px',
  },
  endTitle: {
    display: 'flex',
    color: colors.proposalCardSubtitleColor,
    fontSize: '13px',
    lineHeight: '15px',
    fontWeight: 400,
  },
  text: {
    color: colors.proposalCardTextColor,
    fontSize: '14px',
    fontWeight: 500,
  },
  link: {
    color: colors.primaryButtonBgColor,
    marginTop: '10px',
    fontSize: '13px',
    fontWeight: 400,
  },
})
