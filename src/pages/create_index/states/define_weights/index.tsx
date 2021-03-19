import { Slider } from '@material-ui/core'
import { BackButton } from 'components/buttons'
import { CreateIndexStates, SelectCurrenciesProps } from 'pages/create_index'
import React from 'react'
import { useStyles } from './styles'
import DeleteIcon from 'assets/icons/DeleteIcon.svg'

const DefineWeightsState = ({
  setPageState,
  selectedCurrencies,
  setSelectedCurrencies,
}: {
  setPageState: React.Dispatch<React.SetStateAction<CreateIndexStates>>
  selectedCurrencies: SelectCurrenciesProps[]
  setSelectedCurrencies: React.Dispatch<React.SetStateAction<SelectCurrenciesProps[]>>
}) => {
  const classes = useStyles()

  const filteredArr = selectedCurrencies.filter((item) => item.selected)
  const fullPercentage = 100

  return (
    <>
      <BackButton
        navigate={() => setPageState(CreateIndexStates.SelectWeight)}
        text={'define_weights_back_button_text'.localized()}
        width={660}
      />
      <div className={classes.card}>
        <span>{'define_weights_assets_text'.localized()}</span>
        <div>
          {filteredArr.map((item: SelectCurrenciesProps, index: number) => {
            return (
              <div className={classes.currenciesListItem} key={index}>
                <div className={classes.currencyIconContainer}>
                  <img src={item.icon} />
                  <span className={classes.currenciesItemText}>{item.name}</span>

                  <div>
                    <Slider
                      value={10}
                      classes={{
                        root: classes.rootSlider,
                        rail: classes.railSlider,
                        track: classes.trackSlider,
                        thumbColorPrimary: classes.thumbColorPrimary,
                      }}
                      aria-labelledby="input-slider"
                      step={1}
                    />
                    <img src={DeleteIcon} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default DefineWeightsState
