import Big from 'big.js'

export const votesFormatter = (amount: string) => new Big(amount).div(18).toFixed()

declare module 'big.js' {
  interface Big {
    toFixedSpecial(n: number): string
    toFormat(n: Big, precision: number): string
  }
}

Big.prototype.toFixedSpecial = function (n: number) {
  let str = this.toFixed(n)
  if (str.indexOf('e+') === -1) return str

  // if number is in scientific notation, pick (b)ase and (p)ower
  str = str
    .replace('.', '')
    .split('e+')
    .reduce(function (p: string, b: number) {
      return p + Array(b - p.length + 2).join('0')
    })

  if (n > 0) str += '.' + Array(n + 1).join('0')

  return str
}

Big.prototype.toFormat = (n: Big, precision: number) => {
  const newNumber = new Big(n.toFixed(precision)).toFixed()
  if (newNumber == '0' && !n.eq(0)) {
    return '< 0.000001'
  }
  return newNumber
}
