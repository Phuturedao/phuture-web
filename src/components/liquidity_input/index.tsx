import TextField from '@material-ui/core/TextField'
import React from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'
import EthIcon from 'assets/icons/tokens/EthIcon.svg'
import UsdcIcon from 'assets/icons/tokens/UsdcIcon.svg'
import LiquidityCardArrow from 'assets/icons/LiquidityCardArrow.svg'

export enum CurrencyTypes {
  eth = 'eth',
  usdt = 'usdt',
}

interface LiquidityInputProps {
  currency: CurrencyTypes
  label: string
}

//TODO need to fix currencies & add icons-dropdown

const LiquidityInput = ({ currency, label }: LiquidityInputProps) => {
  const {
    rootTextField,
    inputLabel,
    endAdornmentContainer,
    endAdornmentIconContainer,
    endAdornmentIconText,
  } = useStyles({})

  return (
    <div>
      <span className={inputLabel}>{label}</span>
      <TextField
        classes={{ root: rootTextField }}
        variant="outlined"
        placeholder={'0.0'}
        InputProps={{
          endAdornment: (
            <div className={endAdornmentContainer}>
              <span style={{ color: colors.tableTextColor, fontSize: '14px', marginLeft: '48px', fontWeight: 500 }}>
                {currency === CurrencyTypes.usdt ? 'Tether' : 'Ethereum'}
              </span>
              <div className={endAdornmentIconContainer}>
                <img src={currency === CurrencyTypes.usdt ? UsdcIcon : EthIcon} />
                <span className={endAdornmentIconText}>{currency === CurrencyTypes.usdt ? 'USDT' : 'ETH'}</span>
                <img src={LiquidityCardArrow} />
              </div>
            </div>
          ),
        }}
        type="number"
      />
    </div>
  )
}
export default LiquidityInput
