import TextField from '@material-ui/core/TextField'
import LiquidityCardArrow from 'assets/icons/LiquidityCardArrow.svg'
import EthIcon from 'assets/icons/tokens/EthIcon.svg'
import UsdcIcon from 'assets/icons/tokens/UsdcIcon.svg'
import ModalLiquidity from 'components/liquidity_modal'
import React, { useState } from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'
import Big from 'big.js'

export enum CurrencyTypes {
  eth = 'eth',
  usdt = 'usdt',
}

interface LiquidityInputProps {
  currency: CurrencyTypes
  label: string
  dropdown?: boolean
  setValue: React.Dispatch<React.SetStateAction<string>>
  value: string
  balance?: string
}

//TODO need to fix currencies & add icons-dropdown(nm we will get it from backend)

const LiquidityInput = ({ currency, label, dropdown, value, setValue, balance }: LiquidityInputProps) => {
  const {
    rootTextField,
    inputLabel,
    endAdornmentContainer,
    endAdornmentIconContainer,
    endAdornmentIconText,
    endTextWithoutDropdown,
  } = useStyles({})

  const [selectedIcon, setSelectedIcon] = useState(currency)
  const [openModal, setOpenModal] = useState(false)

  const handleChange = (e: any) => {
    if (balance && e.target.value.length !== 0 && new Big(e.target.value).gt(balance)) {
      setValue(balance)
    } else {
      setValue(e.target.value)
    }
  }

  return (
    <div>
      <span className={inputLabel}>{label}</span>
      <TextField
        value={value}
        onChange={(e: any) => handleChange(e)}
        classes={{ root: rootTextField }}
        variant="outlined"
        placeholder={'0.0'}
        InputProps={{
          endAdornment: (
            <div className={endAdornmentContainer}>
              {dropdown ? (
                <>
                  <span style={{ color: colors.tableTextColor, fontSize: '14px', marginLeft: '48px', fontWeight: 500 }}>
                    {selectedIcon === CurrencyTypes.usdt ? 'Tether' : 'Ethereum'}
                  </span>
                  <div onClick={() => setOpenModal(!openModal)} className={endAdornmentIconContainer}>
                    <img alt="currency-icon" src={selectedIcon === CurrencyTypes.usdt ? UsdcIcon : EthIcon} />
                    <span className={endAdornmentIconText}>{selectedIcon === CurrencyTypes.usdt ? 'USDT' : 'ETH'}</span>
                    <img alt="arrow-icon" src={LiquidityCardArrow} />
                  </div>
                </>
              ) : (
                <>
                  <span style={{ color: colors.white, fontSize: '15px', fontWeight: 500, textAlign: 'end' }}>
                    {'common_app_name'.localized()}
                  </span>
                  <div className={endAdornmentIconContainer}>
                    <img alt="currency-icon" src={selectedIcon === CurrencyTypes.usdt ? UsdcIcon : EthIcon} />
                    <span className={endTextWithoutDropdown}>{'PHTR'}</span>
                  </div>
                </>
              )}
            </div>
          ),
        }}
        type="number"
      />
      <ModalLiquidity
        setSelectedIcon={setSelectedIcon}
        open={openModal}
        handleClose={() => setOpenModal(!openModal)}
        titleModal={'Select a token'}
      />
    </div>
  )
}
export default LiquidityInput
