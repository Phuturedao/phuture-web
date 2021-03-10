import { ThemeOptions } from '@material-ui/core'

export const colors: { [key: string]: string } = {
  white: '#FFFFFF',
  //landing
  textShadowColor: 'rgba(255, 255, 255, 0.55)',
  //BG gradient
  firstGradientColor: '#508676',
  secondGradientColor: '#3D5066',
  //search icon
  searchIconBg: '#4F6579',
  searchIconHoverBg: '#61798C',
  //tables
  tableTextColor: '#D1DEE6',
  tableTitleColor: '#95B3C3',
  tablePositiveGreenColor: '#60E2A3',
  tableNegativeRedColor: '#FF4242',
  //buttons
  primaryButtonTextColor: '#1D2E3E',
  primaryButtonBgColor: '#4CC9F0',
  primaryButtonBgHoverColor: '#AAE5F8',
  primaryButtonBgDisabled: '#466474',
  walletButtonBorderColor: '#95B3C2',
  walletButtonBorderHoverColor: '#AAE5F8',
  voteButtonDarkBg: '#27576C',
  //cards
  defaultCardBg: '#1A2C3C',
  secondaryCardText: '#5C7684',
  cardEndTextColor: '#5C7684',
  proposalCardTextColor: '#B2B2B2',
  proposalCardSubtitleColor: '#808080',
  //modal
  inputBorderColor: '#2E6C84',
  modalTitleColor: '#5F6B76',
}
export const color = (c: string): string => colors[c]
export const buildVariant = (fontWeight: number, fontSize: number, color: string): unknown => ({
  fontWeight,
  fontSize,
  color: colors[color],
})

export const themeConfig: ThemeOptions | undefined = {}
