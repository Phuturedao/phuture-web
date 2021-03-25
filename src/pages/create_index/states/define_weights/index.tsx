import { IconButton, Slider, TextField } from '@material-ui/core'
import { BackButton, PrimaryButton } from 'components/buttons'
import { CreateIndexStates, SelectCurrenciesProps } from 'pages/create_index'
import React, { useState } from 'react'
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

  interface ValuesProps {
    id: number
    value: number
  }

  const testArr = filteredArr.map((item) => {
    return { id: item.id, value: 0 }
  })

  const testValues = testArr as ValuesProps[]

  const [values, setValues] = useState<ValuesProps[]>(testValues)

  const handleSliderChange = (newValue: number, index: number) => {
    const initialState = values.map((obj: ValuesProps) => (obj.id === index ? { ...obj, value: newValue } : obj))

    const allValues = initialState
      .map((el) => el.value)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      })
    const newState = values.map((obj: ValuesProps) =>
      obj.id === index
        ? { ...obj, value: newValue >= 100 ? 100 : newValue }
        : allValues > 100
        ? {
            ...obj,
            value: obj.value > 0 ? obj.value - Math.ceil((allValues - 100) / (values.length - 1)) : 0,
          }
        : obj,
    )

    setValues(newState)
  }

  const handleDelete = (id: number) => {
    const newState = selectedCurrencies.map((obj: SelectCurrenciesProps) =>
      obj.id === id ? { ...obj, selected: !obj.selected } : obj,
    )
    setSelectedCurrencies(newState)
  }

  const handleNavigate = () => {
    const newState = selectedCurrencies.map((obj: SelectCurrenciesProps) => {
      const currentWeight =
        values.find((el) => el.id === obj.id) !== undefined ? values.find((el) => el.id === obj.id)!.value : 0
      const state = values.filter((el) => el.id === obj.id) ? { ...obj, weight: currentWeight } : obj
      return state
    })
    setSelectedCurrencies(newState)
    setPageState(CreateIndexStates.Invest)
  }

  return (
    <>
      <BackButton
        navigate={() => setPageState(CreateIndexStates.SelectWeight)}
        text={'define_weights_back_button_text'.localized()}
        width={660}
      />
      <div className={classes.card}>
        <div className={classes.titleBox}>
          <span>{'define_weights_assets_text'.localized()}</span>
        </div>
        <div>
          {filteredArr.map((item: SelectCurrenciesProps, index: number) => {
            return (
              <div className={classes.currenciesListItem} key={index}>
                <div className={classes.currencyIconContainer}>
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <img src={item.icon} />
                    <span className={classes.currenciesItemText}>{item.name}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Slider
                      classes={{
                        root: classes.rootSlider,
                        rail: classes.railSlider,
                        track: classes.trackSlider,
                        thumbColorPrimary: classes.thumbColorPrimary,
                      }}
                      aria-labelledby="input-slider"
                      step={1}
                      value={Number(values.filter((el) => el.id === item.id)[0].value)}
                      onChange={(e, value) => handleSliderChange(value as number, item.id)}
                      max={fullPercentage}
                    />
                    <div>
                      <TextField
                        value={values.filter((el) => el.id === item.id)[0].value.toString()}
                        onChange={(e: any) =>
                          handleSliderChange(Number(e.target.value) <= 100 ? Number(e.target.value) : 100, item.id)
                        }
                        classes={{ root: classes.rootTextField }}
                        variant="outlined"
                        placeholder={'0'}
                        InputProps={{
                          endAdornment: <div className={classes.endInputIcon}>%</div>,
                        }}
                        type="number"
                      />
                    </div>
                    <IconButton
                      onClick={() => handleDelete(item.id)}
                      style={{
                        padding: '4px !important',
                      }}
                    >
                      <img src={DeleteIcon} />
                    </IconButton>
                  </div>
                </div>
              </div>
            )
          })}
          <div className={classes.currenciesContinueButton}>
            <PrimaryButton
              disabled={filteredArr.length < 1}
              text={'define_weights_continue_button_text'.localized()}
              onClick={handleNavigate}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DefineWeightsState
