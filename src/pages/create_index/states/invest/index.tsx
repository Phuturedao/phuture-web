import { BackButton } from 'components/buttons'
import { CreateIndexStates } from 'pages/create_index'
import React from 'react'

const InvestState = ({ setPageState }: { setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>> }) => {
  return (
    <>
      <BackButton
        navigate={() => setPageState(CreateIndexStates.DefineWeights)}
        text={'invest_back_button_text'.localized()}
      />
      <span>Invest</span>
    </>
  )
}

export default InvestState
