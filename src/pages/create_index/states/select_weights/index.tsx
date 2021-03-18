import { BackButton } from 'components/buttons'
import React from 'react'
import { useStyles } from './styles'
import FinanceIcon from 'assets/icons/FinanceIcon.svg'
import PieChartIcon from 'assets/icons/PieChartIcon.svg'
import { CreateIndexStates } from 'pages/create_index'

const SelectWeightState = ({
  setPageState,
}: {
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
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
              setPageState(CreateIndexStates.DefineWeights)
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
            setPageState(CreateIndexStates.Invest)
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
