import { Button, Container, Typography, Link } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Area } from 'recharts'
import StrategiesIcon from 'assets/icons/landing/StrategiesIcon.svg'
import PermissionIcon from 'assets/icons/landing/PermissionIcon.svg'
import RebalancingIcon from 'assets/icons/landing/RebalancingIcon.svg'
import FeesIcon from 'assets/icons/landing/FeesIcon.svg'

import TwitterIcon from 'assets/icons/landing/TwitterIcon.svg'
import MediumIcon from 'assets/icons/landing/MediumIcon.svg'
import DiscordIcon from 'assets/icons/landing/DiscordIcon.svg'
import GithubIcon from 'assets/icons/landing/GithubIcon.svg'

const Vault = (): JSX.Element => {
  const {
    container,
    headContainer,
    headLeftContainer,
    buttonsBox,
    indexCard,
    headRightContainer,
    cardTitle,
    cardValue,
    indexButton,
    phutureButton,
  } = useStyles()
  const testData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ]
  return (
    <Container className={container}>
      <div className={headContainer}>
        <div className={headLeftContainer}>
          <div className={buttonsBox}>
            <Button className={indexButton}>Index Overview</Button>
            <Button className={phutureButton}>Phuture Overview</Button>
          </div>
          <div className={indexCard}>
            <div>
              <p className={cardTitle}>Total invested:</p>
              <p className={cardValue}>100,000,000 $</p>
              <p>Total profit/loss:</p>
              <Button>+100,000,000 $</Button>
            </div>
            <div>
              <p className={cardTitle}>Current balance:</p>
              <p className={cardValue}>100,000,000 $</p>
              <p>24h profit/loss: </p>
              <Button>-0.2 %</Button>
            </div>
          </div>
        </div>
        <div className={headRightContainer}>
          <ResponsiveContainer width={700} height="80%">
            <AreaChart data={testData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
              <Area type="monotone" dataKey="uv" stroke="#60E2A3" fill="#2F564B" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Container>
  )
}

export default Vault
