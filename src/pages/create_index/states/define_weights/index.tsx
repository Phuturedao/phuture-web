import { BackButton } from 'components/buttons'
import { CreateIndexStates } from 'pages/create_index'
import React from 'react'

const DefineWeightsState = ({
  setPageState,
}: {
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
}) => {
  return (
    <>
      <BackButton
        navigate={() => setPageState(CreateIndexStates.SelectWeight)}
        text={'define_weights_back_button_text'.localized()}
      />
      <span>DefineWeights</span>
    </>
  )
}

export default DefineWeightsState
