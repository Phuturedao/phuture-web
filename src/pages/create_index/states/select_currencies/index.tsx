import { TextField } from '@material-ui/core'
import CheckboxIcon from 'assets/icons/CheckboxIcon.svg'
import AmplIcon from 'assets/icons/tokens/AmplIcon.svg'
import DaiIcon from 'assets/icons/tokens/DaiIcon.svg'
import EthIcon from 'assets/icons/tokens/EthIcon.svg'
import LinkIcon from 'assets/icons/tokens/LinkIcon.svg'
import UniswapIcon from 'assets/icons/tokens/UniswapIcon.svg'
import UsdcIcon from 'assets/icons/tokens/UsdcIcon.svg'
import UsdtIcon from 'assets/icons/tokens/UsdtIcon.svg'
import { BackButton, PrimaryButton, TabButton } from 'components/buttons'
import { CreateIndexStates, IndexSectorsStates } from 'pages/create_index'
import React, { useState } from 'react'
import { useStyles } from './styles'

interface SelectCurrenciesProps {
  icon: any
  name: string
  id: number
  selected: boolean
}

const SelectSectorCurrenciesState = ({
  setPageState,
  selectedSector,
}: {
  selectedSector: IndexSectorsStates
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
}) => {
  const classes = useStyles()
  const [index, setIndex] = useState(10)
  const coinsTestArr: SelectCurrenciesProps[] = [
    { id: 1, icon: UsdcIcon, name: 'USDC', selected: false },
    { id: 2, icon: DaiIcon, name: 'DAI', selected: false },
    { id: 3, icon: UniswapIcon, name: 'UNI', selected: false },
    { id: 4, icon: EthIcon, name: 'ETH', selected: false },
    { id: 5, icon: AmplIcon, name: 'AMPL', selected: false },
    { id: 6, icon: LinkIcon, name: 'LINK', selected: false },
    { id: 7, icon: UsdtIcon, name: 'USDT', selected: false },
  ]
  const selectedTestArr = [selectedSector, selectedSector + 2]
  const preFilteredItems = coinsTestArr.map((obj: SelectCurrenciesProps) =>
    obj.id === selectedTestArr.find((el) => el === obj.id) && selectedSector !== IndexSectorsStates.All
      ? { ...obj, selected: true }
      : obj,
  )
  const [textArr, setTestArr] = useState<SelectCurrenciesProps[]>(preFilteredItems)
  const selectCurrencies = (id: number, value: boolean) => {
    const newState = textArr.map((obj: SelectCurrenciesProps) => (obj.id === id ? { ...obj, selected: !value } : obj))
    setTestArr(newState)
  }
  const filteredArr = textArr.slice(0, index)
  const selectedItems = textArr.filter((item) => item.selected)
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
            {'creating_index_found_assets_template'.localized({ v1: textArr.length })}
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
