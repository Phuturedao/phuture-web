import DefiIcon from 'assets/icons/DefiIconSquare.svg'
import ExchangeIcon from 'assets/icons/ExchangeIconSquare.svg'
import LendingIcon from 'assets/icons/LendingIconSquare.svg'
import NftIcon from 'assets/icons/NftIconSquare.svg'
import { BackButton } from 'components/buttons'
import { CreateIndexStates, IndexSectorsStates, StatesSelectorProps } from 'pages/create_index'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { INDICES } from 'routes'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

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
  setSelectedSector(IndexSectorsStates.Empty)

  return (
    <>
      <BackButton navigate={() => history.push(INDICES)} text={'creating_index_back_button_text'.localized()} />
      <div className={classes.sectorCard}>
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

export default SelectSectorState
