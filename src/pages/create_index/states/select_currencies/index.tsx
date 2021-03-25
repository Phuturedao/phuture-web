import { TextField } from '@material-ui/core'
import CheckboxIcon from 'assets/icons/CheckboxIcon.svg'
import { BackButton, PrimaryButton, TabButton } from 'components/buttons'
import { CreateIndexStates, IndexSectorsStates, SelectCurrenciesProps } from 'pages/create_index'
import React from 'react'
import { useStyles } from './styles'

const SelectSectorCurrenciesState = ({
  setPageState,
  setSelectedCurrencies,
  selectedCurrencies,
  tabIndex,
  setTabIndex,
}: {
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
  selectedCurrencies: SelectCurrenciesProps[]
  setSelectedCurrencies: React.Dispatch<React.SetStateAction<SelectCurrenciesProps[]>>
  tabIndex: number | null
  setTabIndex: React.Dispatch<React.SetStateAction<number | null>>
}): any => {
  const classes = useStyles()
  const selectCurrencies = (id: number, value: boolean) => {
    const newState = selectedCurrencies.map((obj: SelectCurrenciesProps) =>
      obj.id === id ? { ...obj, selected: !obj.selected } : obj,
    )
    setSelectedCurrencies(newState)
  }

  const filteredArr = selectedCurrencies.slice(0, tabIndex === null ? undefined : tabIndex)
  const selectedItems = selectedCurrencies.filter((item) => item.selected)

  const onTab = (tab: number) => {
    if (tabIndex === tab) {
      setTabIndex(null)
    } else {
      setTabIndex(tab)
    }
  }
  return (
    <div style={{ width: '434px' }}>
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
              onClick={() => onTab(3)}
              text={'creating_index_option_top3'.localized()}
              isActive={tabIndex === 3}
            />
            <TabButton
              onClick={() => onTab(5)}
              text={'creating_index_option_top5'.localized()}
              isActive={tabIndex === 5}
            />
            <TabButton
              onClick={() => onTab(10)}
              text={'creating_index_option_top10'.localized()}
              isActive={tabIndex === 10}
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
    </div>
  )
}
export default SelectSectorCurrenciesState
