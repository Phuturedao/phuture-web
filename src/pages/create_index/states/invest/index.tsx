import { BackButton, PrimaryButton } from 'components/buttons'
import LiquidityInput, { CurrencyTypes } from 'components/liquidity_input'
import { CreateIndexStates, SelectCurrenciesProps, WeightMethodState } from 'pages/create_index'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { VAULT } from 'routes'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

const InvestState = ({
  setPageState,
  weightType,
  selectedCurrencies,
  setSelectedCurrencies,
}: {
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
  weightType: WeightMethodState | undefined
  selectedCurrencies: SelectCurrenciesProps[]
  setSelectedCurrencies: React.Dispatch<React.SetStateAction<SelectCurrenciesProps[]>>
}) => {
  const classes = useStyles()

  const filteredArr = selectedCurrencies.filter((item) => item.selected)
  const [value, setValue] = useState('')
  const history = useHistory()
  return (
    <>
      <BackButton
        navigate={() =>
          setPageState(
            weightType === WeightMethodState.Marketcap
              ? CreateIndexStates.SelectWeight
              : CreateIndexStates.DefineWeights,
          )
        }
        width={434}
        text={'invest_back_button_text'.localized()}
      />
      <div className={classes.card}>
        <div style={{ margin: '8px' }}>
          <LiquidityInput
            value={value}
            setValue={setValue}
            dropdown
            currency={CurrencyTypes.eth}
            label={'invest_input_title'.localized()}
          />
        </div>
        <div style={{ margin: '12px 8px' }}>
          <span style={{ color: colors.tableTitleColor }}>{'invest_fees_text'.localized()}</span>
          <span style={{ color: colors.tableTextColor }}>0.001 ETH</span>
        </div>
        <div style={{ margin: '12px 8px' }}>
          <PrimaryButton
            onClick={() => history.push(VAULT)}
            width={'100%'}
            height={'48px'}
            text={'invest_back_button_text'.localized()}
          />
        </div>
      </div>
      <div className={classes.title}>
        <span>{'invest_overview_title'.localized()}</span>
      </div>
      <div className={classes.table}>
        <div className={classes.tableTitleBox}>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ color: colors.tableTitleColor }}>{'invest_current_method'.localized()}</span>
            <span style={{ color: colors.tableTextColor }}> Marketcap</span>
          </div>
          <span style={{ color: colors.tableTitleColor }}>{'define_weights_assets_text'.localized()}</span>
        </div>
        {filteredArr.map((item, index) => {
          return (
            <div className={classes.currenciesListItem} key={index}>
              <div className={classes.currencyIconContainer}>
                <img src={item.icon} />
                <span className={classes.currenciesItemText}>{item.name}</span>
              </div>
              <span className={classes.weightBox}>{'common_percent_template'.localized({ v1: item.weight })}</span>
            </div>
          )
        })}
        <div style={{ borderTop: `1px solid ${colors.cardEndTextColor}` }} />
      </div>
    </>
  )
}

export default InvestState
