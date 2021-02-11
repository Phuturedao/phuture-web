import { TextField } from '@material-ui/core'
import React from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'
import EthIcon from 'assets/icons/tokens/EthIcon.svg'
import UsdcIcon from 'assets/icons/tokens/UsdcIcon.svg'
import LiquidityCardArrow from 'assets/icons/LiquidityCardArrow.svg'

const LiquidityInput = () => {
  const {
    rootTextField,
    inputLabel,
    endAdornmentContainer,
    endAdornmentIconContainer,
    endAdornmentIconText,
  } = useStyles({})

  return (
    <div>
      <span className={inputLabel}>Input 1</span>
      <TextField
        classes={{ root: rootTextField }}
        variant="outlined"
        placeholder={'0.0'}
        InputProps={{
          endAdornment: (
            <div className={endAdornmentContainer}>
              <span style={{ color: colors.tableTextColor, fontSize: '14px', marginLeft: '48px', fontWeight: 500 }}>
                Ethereum
              </span>
              <div className={endAdornmentIconContainer}>
                <img src={EthIcon} />
                <span className={endAdornmentIconText}>ETH</span>
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
