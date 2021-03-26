export const transformAddress = (address: string) => {
  return `${address.substring(0, 6)}…${address.substring(address.length - 4)}`
}
