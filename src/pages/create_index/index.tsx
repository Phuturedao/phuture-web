import { Container, TextField } from '@material-ui/core'
import CheckboxIcon from 'assets/icons/CheckboxIcon.svg'
import DefiIcon from 'assets/icons/DefiIconSquare.svg'
import ExchangeIcon from 'assets/icons/ExchangeIconSquare.svg'
import LendingIcon from 'assets/icons/LendingIconSquare.svg'
import NftIcon from 'assets/icons/NftIconSquare.svg'
import AmplIcon from 'assets/icons/tokens/AmplIcon.svg'
import DaiIcon from 'assets/icons/tokens/DaiIcon.svg'
import EthIcon from 'assets/icons/tokens/EthIcon.svg'
import LinkIcon from 'assets/icons/tokens/LinkIcon.svg'
import UniswapIcon from 'assets/icons/tokens/UniswapIcon.svg'
import UsdcIcon from 'assets/icons/tokens/UsdcIcon.svg'
import UsdtIcon from 'assets/icons/tokens/UsdtIcon.svg'
import { BackButton, PrimaryButton, TabButton } from 'components/buttons'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { INDICES } from 'routes'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

export enum CreateIndexStates {
  SelectSector,
  SelectSectorCurrencies,
  SelectWeight,
  DefineWeights,
  Invest,
}

export enum IndexSectorsStates {
  Empty,
  Nft,
  Lending,
  Exchange,
  Defi,
  All,
}

export interface StatesSelectorProps {
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
  selectedSector: IndexSectorsStates
  setSelectedSector: React.Dispatch<React.SetStateAction<IndexSectorsStates>>
}

interface ItemProps {
  icon: string
  name: string
  id: number
}

const SelectSectorState = ({ setPageState, selectedSector, setSelectedSector }: StatesSelectorProps) => {
  const classes = useStyles()
  const history = useHistory()
  const arr: ItemProps[] = [
    {
      id: 1,
      icon: NftIcon,
      name: 'Non-fungible tokens',
    },
    { id: 2, icon: LendingIcon, name: 'Lending' },
    { id: 3, icon: ExchangeIcon, name: 'Exchange' },
    { id: 4, icon: DefiIcon, name: 'Decentralised Finance' },
  ]

  return (
    <>
      <BackButton navigate={() => history.push(INDICES)} text={'creating_index_back_button_text'.localized()} />
      <div className={classes.selectSectorCard}>
        {arr.map((item: ItemProps, index: number) => {
          return (
            <div
              style={{
                border:
                  selectedSector === item.id
                    ? `1px solid ${colors.primaryButtonBgHoverColor}`
                    : `1px solid ${colors.cardEndTextColor}`,
              }}
              onClick={() => {
                setSelectedSector(item.id)
                setPageState(CreateIndexStates.SelectSectorCurrencies)
              }}
              className={classes.cardItem}
              key={index}
            >
              <div>
                <img src={item.icon} />
              </div>
              <div className={classes.cardText}>{item.name}</div>
            </div>
          )
        })}
        <div className={classes.continueButton}>
          <span
            onClick={() => {
              setSelectedSector(IndexSectorsStates.All)
              setPageState(CreateIndexStates.SelectSectorCurrencies)
            }}
            className={classes.continueText}
          >
            {'creating_index_bottom_text'.localized()}
          </span>
        </div>
      </div>
    </>
  )
}

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
const SelectWeightState = ({
  setPageState,
}: {
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
}) => {
  return (
    <>
      <BackButton
        navigate={() => setPageState(CreateIndexStates.SelectSectorCurrencies)}
        text={'creating_index_back_button_text'.localized()}
      />
      <span>SelectWeight</span>
    </>
  )
}
const DefineWeightsState = ({
  setPageState,
}: {
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
}) => {
  return <span>DefineWeights</span>
}
const InvestState = ({ setPageState }: { setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>> }) => {
  return <span>Invest</span>
}

const CreateIndex = (): JSX.Element => {
  const classes = useStyles()
  const [pageState, setPageState] = useState<CreateIndexStates>(CreateIndexStates.SelectSector)
  const [selectedSector, setSelectedSector] = useState<IndexSectorsStates>(IndexSectorsStates.Empty)

  const StatesSwitch = () => {
    switch (pageState) {
      case CreateIndexStates.SelectSector:
        return (
          <SelectSectorState
            selectedSector={selectedSector}
            setSelectedSector={setSelectedSector}
            setPageState={setPageState}
          />
        )
      case CreateIndexStates.SelectSectorCurrencies:
        return <SelectSectorCurrenciesState selectedSector={selectedSector} setPageState={setPageState} />
      case CreateIndexStates.SelectWeight:
        return <SelectWeightState setPageState={setPageState} />
      case CreateIndexStates.DefineWeights:
        return <DefineWeightsState setPageState={setPageState} />
      case CreateIndexStates.Invest:
        return <InvestState setPageState={setPageState} />
    }
  }

  return (
    <Container className={classes.rootContainer}>
      <StatesSwitch />
    </Container>
  )
}

export default CreateIndex
