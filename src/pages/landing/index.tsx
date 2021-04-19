import { Button, Container, Link } from '@material-ui/core'
import DiscordIcon from 'assets/icons/landing/DiscordIcon.svg'
import FirstBoxIcon from 'assets/icons/landing/FirstBoxIcon.svg'
import FourthBoxIcon from 'assets/icons/landing/FourthBoxIcon.svg'
import GithubIcon from 'assets/icons/landing/GithubIcon.svg'
import MediumIcon from 'assets/icons/landing/MediumIcon.svg'
import SecondBoxIcon from 'assets/icons/landing/SecondBoxIcon.svg'
import ThirdBoxIcon from 'assets/icons/landing/ThirdBoxIcon.svg'
import TwitterIcon from 'assets/icons/landing/TwitterIcon.svg'
import React from 'react'
import { useStyles } from './styles'

const Landing = (): JSX.Element => {
  const {
    container,
    firstContainer,
    firstLeftContainer,
    firstTitle,
    buttonContainer,
    button,
    secondContainer,
    secondTopContainer,
    secondTopText,
    secondTopTitle,
    thirdContainer,
    thirdLeftContainer,
    thirdLeftTitle,
    thirdLeftText,
    fourthContainer,
    fourthRightContainer,
    fourthRightTitle,
    fourthRightText,
    fourthRightButtons,
    emailButton,
    subscribeButton,
    footer,
    footerIconsContainer,
    iconsMargin,
  } = useStyles()
  return (
    <Container className={container}>
      <div className={firstContainer}>
        <div className={firstLeftContainer}>
          <p className={firstTitle}>{'landing_first_block_title'.localized()}</p>
          <Link className={buttonContainer} target={'_blank'} href="https://phuture.gitbook.io/phuture/">
            <Button variant="outlined" classes={{ root: button }}>
              {'landing_first_block_button'.localized()}
            </Button>
          </Link>
        </div>
        <img style={{ width: '453px' }} src={FirstBoxIcon} alt={'tokens-icon'} />
      </div>
      <div className={secondContainer}>
        <div className={secondTopContainer}>
          <span className={secondTopText}>{'landing_second_block_text'.localized()}</span>
          <span className={secondTopTitle}>{'landing_second_block_title'.localized()}</span>
        </div>
        <img style={{ marginTop: '-20px' }} src={SecondBoxIcon} alt={'chart-icon'} />
      </div>
      <div className={thirdContainer}>
        <div className={thirdLeftContainer}>
          <span className={thirdLeftTitle}>{'landing_third_block_title'.localized()}</span>
          <span className={thirdLeftText}>{'landing_third_block_text'.localized()}</span>
        </div>
        <img style={{ width: '627px', marginTop: '-100px' }} src={ThirdBoxIcon} alt={'liquidity-icon'} />
      </div>
      <div className={fourthContainer}>
        <img style={{ width: '700px' }} src={FourthBoxIcon} alt={'protocol-lego-icon'} />
        <div className={fourthRightContainer}>
          <span className={fourthRightTitle}>{'landing_fourth_block_title'.localized()}</span>
          <span className={fourthRightText}>{'landing_fourth_block_text'.localized()}</span>
          <div className={fourthRightButtons}>
            <Button className={emailButton}>{'landing_fourth_block_email_button'.localized()}</Button>
            <Button className={subscribeButton}>{'landing_fourth_block_subscribe_button'.localized()}</Button>
          </div>
        </div>
      </div>
      <div className={footer}>
        <div className={footerIconsContainer}>
          <Link target="_blank" href="https://twitter.com/phuturedao">
            <img className={iconsMargin} src={TwitterIcon} alt="twitter-icon" />
          </Link>
          <Link target={'_blank'} href="https://phuture-finance.medium.com/">
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
