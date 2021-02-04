import { Container, Typography } from '@material-ui/core'
import { PrimaryButton } from 'components/buttons'
import PoolsTable from 'components/table'
import React from 'react'
import { useStyles } from './styles'

const Pools = (): JSX.Element => {
  const { subtitle, title, buttonContainer } = useStyles()
  return (
    <Container>
      <Typography className={title}>{'pools_call-to-action_text'.localized()}</Typography>
      <Typography className={subtitle}>{'pools_descriptor'.localized()}</Typography>
      <div className={buttonContainer}>
        <PrimaryButton text={'pools_create_pool_button'.localized()} />
      </div>
      <PoolsTable />
    </Container>
  )
}

export default Pools
