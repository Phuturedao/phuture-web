import { BackButton } from 'components/buttons'
import { CreateIndexStates, WeightMethodState } from 'pages/create_index'
import React from 'react'

const InvestState = ({
  setPageState,
  weightType,
}: {
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
  weightType: WeightMethodState | undefined
}) => {
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
      <span>Invest</span>
    </>
  )
}

export default InvestState
