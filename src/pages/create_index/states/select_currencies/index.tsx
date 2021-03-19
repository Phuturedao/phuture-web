import { TextField } from '@material-ui/core'
import CheckboxIcon from 'assets/icons/CheckboxIcon.svg'
import { BackButton, PrimaryButton, TabButton } from 'components/buttons'
import { CreateIndexStates, IndexSectorsStates, SelectCurrenciesProps } from 'pages/create_index'
import React, { useState } from 'react'
import { useStyles } from './styles'

const SelectSectorCurrenciesState = ({
  setPageState,
  selectedSector,
  currencies,
  setSelectedCurrencies,
  selectedCurrencies,
}: {
  selectedSector: IndexSectorsStates
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
  currencies: SelectCurrenciesProps[]
  selectedCurrencies: SelectCurrenciesProps[]
  setSelectedCurrencies: React.Dispatch<React.SetStateAction<SelectCurrenciesProps[]>>
}) => {
  const classes = useStyles()
  const [index, setIndex] = useState(10)
  const selectCurrencies = (id: number, value: boolean) => {
    const newState = selectedCurrencies.map((obj: SelectCurrenciesProps) =>
      obj.id === id ? { ...obj, selected: !value } : obj,
    )
    setSelectedCurrencies(newState)
  }
  const filteredArr = selectedCurrencies.slice(0, index)
  const selectedItems = selectedCurrencies.filter((item) => item.selected)
  return (
    <>
      <BackButton
        navigate={() => setPageState(CreateIndexStates.SelectSector)}
        text={'creating_index_back_button_text'.localized()}
      />
      <div className={classes.selectCurrenciesCard}>
        <div className={classes.inputContainer}>
          <TextField
            classes={{ root: classes.input }}
            placeholder={'creating_index_input_placeholder'.localized()}
            variant="outlined"
          />
        </div>
        <div>
          <span className={classes.selectCurrenciesOption}>{'creating_index_options_title'.localized()}</span>
          <div className={classes.selectCurrenciesTabs}>
            <TabButton
              onClick={() => setIndex(3)}
              text={'creating_index_option_top3'.localized()}
              isActive={index === 3}
            />
            <TabButton
              onClick={() => setIndex(5)}
              text={'creating_index_option_top5'.localized()}
              isActive={index === 5}
            />
            <TabButton
              onClick={() => setIndex(10)}
              text={'creating_index_option_top10'.localized()}
              isActive={index === 10}
            />
          </div>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <span style={{ marginBottom: '12px' }} className={classes.selectCurrenciesOption}>
            {'creating_index_found_assets_template'.localized({ v1: selectedCurrencies.length })}
          </span>
        </div>
        {filteredArr.map((item: SelectCurrenciesProps, index: number) => {
          return (
            <div
              onClick={() => selectCurrencies(item.id, item.selected)}
              className={classes.currenciesListItem}
              key={index}
            >
              <div className={classes.currencyIconContainer}>
                <img src={item.icon} />
                <span className={classes.currenciesItemText}>{item.name}</span>
              </div>
              <div style={{ width: '20px', height: '20px' }}>
                {!item.selected ? <div className={classes.checkboxContainer}></div> : <img src={CheckboxIcon} />}
              </div>
            </div>
          )
        })}
        <div className={classes.currenciesContinueButton}>
          <PrimaryButton
            disabled={selectedItems.length < 1}
            text={'creating_index_continue_button_template'.localized({ v1: selectedItems.length })}
            onClick={() => setPageState(CreateIndexStates.SelectWeight)}
          />
        </div>
      </div>
    </>
  )
}
export default SelectSectorCurrenciesState
