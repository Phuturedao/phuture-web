import FinanceIcon from 'assets/icons/FinanceIcon.svg'
import PieChartIcon from 'assets/icons/PieChartIcon.svg'
import { BackButton } from 'components/buttons'
import { CreateIndexStates, WeightMethodState } from 'pages/create_index'
import React from 'react'
import { useStyles } from './styles'

const SelectWeightState = ({
  setPageState,
  setWeightType,
}: {
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
  setWeightType: React.Dispatch<React.SetStateAction<WeightMethodState | undefined>>
}) => {
  const classes = useStyles()
  return (
    <>
      <BackButton
        navigate={() => setPageState(CreateIndexStates.SelectSectorCurrencies)}
        text={'select_weighting_back_button_text'.localized()}
      />
      <div className={classes.sectorCard}>
        <div className={classes.cardsContainer}>
          <div
            onClick={() => {
              setWeightType(WeightMethodState.Marketcap)
              setPageState(CreateIndexStates.Invest)
            }}
            className={classes.card}
          >
            <div className={classes.blueBox}>
              <img style={{ margin: '20px' }} src={PieChartIcon} />
            </div>
            <span className={classes.optionText}>{'select_weighting_first_option_text'.localized()}</span>
          </div>
          <div className={classes.disabledCard}>
            <div className={classes.blueBox}>
              <img style={{ margin: '18px' }} src={FinanceIcon} />
            </div>
            <span className={classes.optionText}>{'select_weighting_second_option_text'.localized()}</span>
          </div>
        </div>
        <div
          onClick={() => {
            setWeightType(WeightMethodState.Manual)
            setPageState(CreateIndexStates.DefineWeights)
          }}
          className={classes.manuallyBox}
        >
          <span className={classes.manuallyText}>{'select_weighting_manually_text'.localized()}</span>
        </div>
      </div>
    </>
  )
}

export default SelectWeightState
