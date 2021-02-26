import { Button, Container, Typography, Link } from '@material-ui/core'
import React from 'react'
import { useStyles } from './styles'
import StrategiesIcon from 'assets/icons/landing/StrategiesIcon.svg'
import PermissionIcon from 'assets/icons/landing/PermissionIcon.svg'
import RebalancingIcon from 'assets/icons/landing/RebalancingIcon.svg'
import LiquidityLogo from 'assets/icons/landing/LiquidityLogo.svg'

import TwitterIcon from 'assets/icons/landing/TwitterIcon.svg'
import MediumIcon from 'assets/icons/landing/MediumIcon.svg'
import DiscordIcon from 'assets/icons/landing/DiscordIcon.svg'
import GithubIcon from 'assets/icons/landing/GithubIcon.svg'

const Landing = (): JSX.Element => {
  const {
    container,
    headContainer,
    title,
    buttonContainer,
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
        <Typography className={title}>{'landing_title'.localized()}</Typography>
        <Link className={buttonContainer} target={'_blank'} href="https://phuture.gitbook.io/phuture/">
          <Button variant="outlined" classes={{ root: button }}>
            {'landing_learn_button_text'.localized()}
          </Button>
        </Link>
      </div>
      <div className={cards}>
        <div className={cardContainer}>
          <img src={StrategiesIcon} alt="strategies-icon" />
          <Typography className={cardTitle}>{'landing_card1_title'.localized()}</Typography>
          <Typography className={cardText}>{'landing_card1_text'.localized()}</Typography>
        </div>
        <div className={cardContainer}>
          <img src={PermissionIcon} alt="permission-icon" />
          <Typography className={cardTitle}>{'landing_card2_title'.localized()}</Typography>
          <Typography className={cardText}>{'landing_card2_text'.localized()}</Typography>
        </div>
        <div className={cardContainer}>
          <img src={RebalancingIcon} alt="rebalancing-icon" />
          <Typography className={cardTitle}>{'landing_card3_title'.localized()}</Typography>
          <Typography className={cardText}>{'landing_card3_text'.localized()}</Typography>
        </div>
        <div className={cardContainer}>
          <img src={LiquidityLogo} alt="fees-icon" />
          <Typography className={cardTitle}>{'landing_card4_title'.localized()}</Typography>
          <Typography className={cardText}>{'landing_card4_text'.localized()}</Typography>
        </div>
      </div>
      <div className={footer}>
        <a href="mailto:info@phuture.finance" className={footerEmail}>
          {'landing_mail_text'.localized()}
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
