import { Button, Container, Typography, Link } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'
import StrategiesIcon from 'assets/icons/landing/StrategiesIcon.svg'
import PermissionIcon from 'assets/icons/landing/PermissionIcon.svg'
import RebalancingIcon from 'assets/icons/landing/RebalancingIcon.svg'
import FeesIcon from 'assets/icons/landing/FeesIcon.svg'

import TwitterIcon from 'assets/icons/landing/TwitterIcon.svg'
import MediumIcon from 'assets/icons/landing/MediumIcon.svg'
import DiscordIcon from 'assets/icons/landing/DiscordIcon.svg'
import GithubIcon from 'assets/icons/landing/GithubIcon.svg'

const Landing = (): JSX.Element => {
  const {
    container,
    headContainer,
    title,
    button,
    cards,
    cardContainer,
    cardTitle,
    cardText,
    footer,
    footerEmail,
    footerIconsContainer,
    iconsMargin,
  } = useStyles()
  return (
    <Container className={container}>
      <div className={headContainer}>
        <Typography className={title}>Unlock the power to create, swap and invest into crypto indices.</Typography>
        <Link target={'_blank'} href="https://phuture.gitbook.io/phuture/">
          <Button variant="outlined" classes={{ root: button }}>
            Learn More
          </Button>
        </Link>
      </div>
      <div className={cards}>
        <div className={cardContainer}>
          <img src={StrategiesIcon} alt="strategies-icon" />
          <Typography className={cardTitle}>Flexible Index Strategies</Typography>
          <Typography className={cardText}>
            The Phuture Index Creator can support an array of index options including automated sector tracking and
            dynamic weighting methodologies.
          </Typography>
        </div>
        <div className={cardContainer}>
          <img src={PermissionIcon} alt="permission-icon" />
          <Typography className={cardTitle}>Permissionless Index Creation </Typography>
          <Typography className={cardText}>
            Phuture introduces an open design philosophy for creating passive investment strategies, providing the tools
            for users to create new indices or invest into existing ones created by the community.
          </Typography>
        </div>
        <div className={cardContainer}>
          <img src={RebalancingIcon} alt="rebalancing-icon" />
          <Typography className={cardTitle}>Automated Rebalancing and Reweighting</Typography>
          <Typography className={cardText}>
            The Phuture AMM fuels the rebalancing engine ensuring that with every trade, index assets are rebalanced
            towards their optimal weights. Weights calculated on dynamic data are reweighted weekly to assure index
            accuracy.
          </Typography>
        </div>
        <div className={cardContainer}>
          <img src={FeesIcon} alt="fees-icon" />
          <Typography className={cardTitle}>Slippage Based Fees</Typography>
          <Typography className={cardText}>
            The Phuture AMM employs a slippage based fee system to deliver superior performance and incentives to
            liquidity providers.
          </Typography>
        </div>
      </div>
      <div className={footer}>
        <a href="mailto:info@phuture.finance" className={footerEmail}>
          info@phuture.finance
        </a>
        <div className={footerIconsContainer}>
          <Link target="_blank" href="https://twitter.com/phuturedao">
            <img className={iconsMargin} src={TwitterIcon} alt="twitter-icon" />
          </Link>
          <Link target={'_blank'} href="https://phuturedao.medium.com/">
            <img className={iconsMargin} src={MediumIcon} alt="medium-icon" />
          </Link>
          <Link target={'_blank'} href="https://discord.com/invite/frRD3Ck">
            <img className={iconsMargin} src={DiscordIcon} alt="discord-icon" />
          </Link>
          <Link target={'_blank'} href="https://github.com/Phuturedao/">
            <img src={GithubIcon} alt="github-icon" />
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Landing
