import TextField from '@material-ui/core/TextField'
import LiquidityCardArrow from 'assets/icons/LiquidityCardArrow.svg'
import EthIcon from 'assets/icons/tokens/EthIcon.svg'
import UsdcIcon from 'assets/icons/tokens/UsdcIcon.svg'
import ModalLiquidity from 'components/liquidity_modal'
import React, { useState } from 'react'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

export enum CurrencyTypes {
  eth = 'eth',
  usdt = 'usdt',
}

interface LiquidityInputProps {
  currency: CurrencyTypes
  label: string
  dropdown?: boolean
}

//TODO need to fix currencies & add icons-dropdown

const LiquidityInput = ({ currency, label, dropdown }: LiquidityInputProps) => {
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
              {dropdown ? (
                <>
                  <span style={{ color: colors.tableTextColor, fontSize: '14px', marginLeft: '48px', fontWeight: 500 }}>
                    {selectedIcon === CurrencyTypes.usdt ? 'Tether' : 'Ethereum'}
                  </span>
                  <div onClick={() => setOpenModal(!openModal)} className={endAdornmentIconContainer}>
                    <img src={selectedIcon === CurrencyTypes.usdt ? UsdcIcon : EthIcon} />
                    <span className={endAdornmentIconText}>{selectedIcon === CurrencyTypes.usdt ? 'USDT' : 'ETH'}</span>
                    <img src={LiquidityCardArrow} />
                  </div>
                </>
              ) : (
                <>
                  <span style={{ color: colors.tableTextColor, fontSize: '14px', fontWeight: 500, textAlign: 'end' }}>
                    {'Phuture'}
                  </span>
                  <div className={endAdornmentIconContainer}>
                    <img src={selectedIcon === CurrencyTypes.usdt ? UsdcIcon : EthIcon} />
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
