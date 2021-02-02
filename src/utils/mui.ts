import { ThemeOptions } from '@material-ui/core'

export const colors: { [key: string]: string } = {
  white: '#FFFFFF',
  //BG gradient
  firstGradientColor: '#508676',
  secondGradientColor: '#3D5066',
  //wallet button
  walletButtonBorderColor: '#95B3C2',
  walletButtonBorderHoverColor: '#AAE5F8',
  //search icon
  searchIconBg: '#4F6579',
  searchIconHoverBg: '#61798C',
}
export const color = (c: string): string => colors[c]
export const buildVariant = (fontWeight: number, fontSize: number, color: string): unknown => ({
  fontWeight,
  fontSize,
  color: colors[color],
})

export const themeConfig: ThemeOptions | undefined = {}
