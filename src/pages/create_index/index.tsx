import { Container } from '@material-ui/core'
import AmplIcon from 'assets/icons/tokens/AmplIcon.svg'
import DaiIcon from 'assets/icons/tokens/DaiIcon.svg'
import EthIcon from 'assets/icons/tokens/EthIcon.svg'
import LinkIcon from 'assets/icons/tokens/LinkIcon.svg'
import UniswapIcon from 'assets/icons/tokens/UniswapIcon.svg'
import UsdcIcon from 'assets/icons/tokens/UsdcIcon.svg'
import UsdtIcon from 'assets/icons/tokens/UsdtIcon.svg'
import React, { useState } from 'react'
import { DefineWeightsState, InvestState, SelectCurrenciesState, SelectSectorState, SelectWeightsState } from './states'
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

export interface SelectCurrenciesProps {
  icon: any
  name: string
  id: number
  selected: boolean
}

export interface StatesSelectorProps {
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
  selectedSector: IndexSectorsStates
  setSelectedSector: React.Dispatch<React.SetStateAction<IndexSectorsStates>>
}

export enum WeightMethodState {
  Marketcap,
  Manual,
}

const CreateIndex = (): JSX.Element => {
  const classes = useStyles()

  const allCurrenciesTestArr: SelectCurrenciesProps[] = [
    { id: 1, icon: UsdcIcon, name: 'USDC', selected: false },
    { id: 2, icon: DaiIcon, name: 'DAI', selected: false },
    { id: 3, icon: UniswapIcon, name: 'UNI', selected: false },
    { id: 4, icon: EthIcon, name: 'ETH', selected: false },
    { id: 5, icon: AmplIcon, name: 'AMPL', selected: false },
    { id: 6, icon: LinkIcon, name: 'LINK', selected: false },
    { id: 7, icon: UsdtIcon, name: 'USDT', selected: false },
  ]

  const [pageState, setPageState] = useState<CreateIndexStates>(CreateIndexStates.SelectSector)
  const [selectedSector, setSelectedSector] = useState<IndexSectorsStates>(IndexSectorsStates.Empty)
  const [selectedCurrencies, setSelectedCurrencies] = useState<SelectCurrenciesProps[]>(allCurrenciesTestArr)
  const [weightType, setWeightType] = useState<WeightMethodState>()
  console.log('weightType: ', weightType && weightType)

  const selectedTestArr = [selectedSector, selectedSector + 2]
  const preFilteredItems = selectedCurrencies.map((obj: SelectCurrenciesProps) =>
    obj.id === selectedTestArr.find((el) => el === obj.id) && selectedSector !== IndexSectorsStates.All
      ? { ...obj, selected: true }
      : obj,
  )

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
        return (
          <SelectCurrenciesState
            currencies={allCurrenciesTestArr}
            selectedSector={selectedSector}
            setPageState={setPageState}
            setSelectedCurrencies={setSelectedCurrencies}
            selectedCurrencies={preFilteredItems}
          />
        )
      case CreateIndexStates.SelectWeight:
        return <SelectWeightsState setWeightType={setWeightType} setPageState={setPageState} />
      case CreateIndexStates.DefineWeights:
        return (
          <DefineWeightsState
            setSelectedCurrencies={setSelectedCurrencies}
            selectedCurrencies={preFilteredItems}
            setPageState={setPageState}
          />
        )
      case CreateIndexStates.Invest:
        return <InvestState weightType={weightType} setPageState={setPageState} />
    }
  }

  return (
    <Container className={classes.rootContainer}>
      <StatesSwitch />
    </Container>
  )
}

export default CreateIndex
