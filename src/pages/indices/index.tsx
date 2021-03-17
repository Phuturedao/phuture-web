import { Container, Typography } from '@material-ui/core'
import { PrimaryButton, TabButton } from 'components/buttons'
import PoolsTable from 'components/table'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CREATE_INDEX } from 'routes'
import { useStyles } from './styles'

const Indices = (): JSX.Element => {
  const { title, buttonContainer } = useStyles()
  const [index, setIndex] = useState(1)
  const history = useHistory()

  return (
    <Container>
      <Typography className={title}>{'indices_call_to_action_text'.localized()}</Typography>
      <div className={buttonContainer}>
        <PrimaryButton onClick={() => history.push(CREATE_INDEX)} text={'indices_button'.localized()} />
      </div>
      <Typography className={title}>{'indices_call_to_action_text_2'.localized()}</Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '0 200px',
          justifyContent: 'center',
          margin: '20px 0',
        }}
      >
        <TabButton
          onClick={() => setIndex(1)}
          text={'indices_tab_panel_stability'.localized()}
          isActive={index === 1}
        />
        <TabButton onClick={() => setIndex(2)} text={'indices_tab_panel_growth'.localized()} isActive={index === 2} />
        <TabButton onClick={() => setIndex(3)} text={'indices_tab_panel_lending'.localized()} isActive={index === 3} />
        <TabButton onClick={() => setIndex(4)} text={'indices_tab_panel_gaming'.localized()} isActive={index === 4} />
        <TabButton onClick={() => setIndex(5)} text={'indices_tab_panel_exchange'.localized()} isActive={index === 5} />
        <TabButton onClick={() => setIndex(6)} text={'indices_tab_panel_assets'.localized()} isActive={index === 6} />
      </div>
      <PoolsTable />
    </Container>
  )
}

export default Indices
