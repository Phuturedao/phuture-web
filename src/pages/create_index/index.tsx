import { Container } from '@material-ui/core'
import React, { useState } from 'react'
import { SelectSectorState, SelectCurrenciesState, SelectWeightsState, DefineWeightsState, InvestState } from './states'
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
        return <SelectCurrenciesState selectedSector={selectedSector} setPageState={setPageState} />
      case CreateIndexStates.SelectWeight:
        return <SelectWeightsState setPageState={setPageState} />
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
