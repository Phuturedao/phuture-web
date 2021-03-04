import { Container } from '@material-ui/core'
import { BackButton } from 'components/buttons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { INDICES } from 'routes'
import LiquidityCard from 'components/liquidity_card'
import { useStyles } from './styles'

const Liquidity = (): JSX.Element => {
  const history = useHistory()
  const { container } = useStyles()
  return (
    <Container className={container}>
      <BackButton navigate={() => history.push(INDICES)} text={'pools_add_liquidity_button'.localized()} />
      <LiquidityCard />
    </Container>
  )
}

export default Liquidity
