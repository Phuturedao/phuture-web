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
  //buttons
  primaryButtonTextColor: '#1D2E3E',
  primaryButtonBgColor: '#4CC9F0',
  primaryButtonBgHoverColor: '#AAE5F8',
  primaryButtonBgDisabled: '#466474',
  walletButtonBorderColor: '#95B3C2',
  walletButtonBorderHoverColor: '#AAE5F8',
  //cards
  defaultCardBg: '#1A2C3C',
}
export const color = (c: string): string => colors[c]
export const buildVariant = (fontWeight: number, fontSize: number, color: string): unknown => ({
  fontWeight,
  fontSize,
  color: colors[color],
})

export const themeConfig: ThemeOptions | undefined = {}
