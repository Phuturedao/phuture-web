import { Button, Container, FormControlLabel, Input, Link } from '@material-ui/core'
import FirstBoxIcon from 'assets/icons/landing/FirstBoxIcon.svg'
import FourthBoxIcon from 'assets/icons/landing/FourthBoxIcon.svg'
import MediumIcon from 'assets/icons/landing/MediumIcon.svg'
import SecondBoxIcon from 'assets/icons/landing/SecondBoxIcon.svg'
import SecondBoxIconSmall from 'assets/icons/landing/SecondBoxIconSmall.svg'
import ThirdBoxIcon from 'assets/icons/landing/ThirdBoxIcon.svg'
import LinkedInIcon from 'assets/icons/landing/LinkedInIcon.svg'
import TwitterIcon from 'assets/icons/landing/TwitterIcon.svg'
import TelegramIcon from 'assets/icons/landing/TelegramIcon.svg'
import GitbookIcon from 'assets/icons/landing/GitbookIcon.svg'
import GitIcon from 'assets/icons/landing/GitIcon.svg'
import DiscordIcon from 'assets/icons/landing/DiscordIcon.svg'
import { CustomCheckbox } from 'components/landing_checkbox'
import React, { useState } from 'react'
import useWindowDimensions from 'services/resizeManager'
import { useStyles } from './styles'
import { LandingHeader } from 'components/landing_header'

const Landing = (): JSX.Element => {
  const {
    container,
    firstContainer,
    firstLeftContainer,
    firstTitle,
    buttonContainer,
    button,
    firstImg,
    secondContainer,
    secondTopContainer,
    secondTopText,
    secondTopTitle,
    secondImg,
    thirdContainer,
    thirdLeftContainer,
    thirdLeftTitle,
    thirdLeftText,
    thirdImg,
    fourthContainer,
    fourthRightContainer,
    fourthRightTitle,
    fourthRightText,
    fourthRightButtons,
    fourthImg,
    emailButton,
    subscribeButton,
    updatesBox,
    updatesText,
    updatesTextBold,
    updatesCheckbox,
    labelStyles,
    footer,
    footerIconsContainer,
    iconsMargin,
  } = useStyles()

  const { width, height } = useWindowDimensions()
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <Container className={container}>
      <LandingHeader />
      <div style={{ marginTop: height < 750 ? '2%' : '7%' }} className={firstContainer}>
        <div className={firstLeftContainer}>
          <h1 className={firstTitle}>{'landing_first_block_title'.localized()}</h1>
          <Link
            rel="noreferrer"
            className={buttonContainer}
            target={'_blank'}
            href="https://phuture.gitbook.io/phuture/"
          >
            <Button variant="outlined" classes={{ root: button }}>
              {'landing_first_block_button'.localized()}
            </Button>
          </Link>
        </div>
        <img className={firstImg} src={FirstBoxIcon} alt={'tokens-icon'} />
      </div>
      <div className={secondContainer}>
        <div className={secondTopContainer}>
          <span className={secondTopText}>{'landing_second_block_text'.localized()}</span>
          <span className={secondTopTitle}>{'landing_second_block_title'.localized()}</span>
        </div>
        <img className={secondImg} src={width > 575 ? SecondBoxIcon : SecondBoxIconSmall} alt={'chart-icon'} />
      </div>
      <div className={thirdContainer}>
        <div className={thirdLeftContainer}>
          <span className={thirdLeftTitle}>{'landing_third_block_title'.localized()}</span>
          <span className={thirdLeftText}>{'landing_third_block_text'.localized()}</span>
        </div>
        <img className={thirdImg} src={ThirdBoxIcon} alt={'liquidity-icon'} />
      </div>
      <div className={fourthContainer}>
        {width > 575 && <img className={fourthImg} src={FourthBoxIcon} alt={'protocol-lego-icon'} />}
        <div className={fourthRightContainer}>
          <span className={fourthRightTitle}>{'landing_fourth_block_title'.localized()}</span>
          <span className={fourthRightText}>{'landing_fourth_block_text'.localized()}</span>
          {width <= 575 && <img className={fourthImg} src={FourthBoxIcon} alt={'protocol-lego-icon'} />}
          <div className={fourthRightButtons}>
            <Input
              type={'email'}
              inputProps={{ min: 0, style: { textAlign: 'center' } }}
              className={emailButton}
              placeholder={'landing_fourth_block_email_button'.localized()}
            ></Input>
            <Button className={subscribeButton}>{'landing_fourth_block_subscribe_button'.localized()}</Button>
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <div className={updatesBox}>
              <FormControlLabel
                labelPlacement="start"
                classes={{ labelPlacementStart: labelStyles }}
                control={
                  <CustomCheckbox
                    className={updatesCheckbox}
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    name="checkedB"
                    color="primary"
                  />
                }
                label={
                  <div className={updatesText}>
                    Yes, send me updates and information relating to <span className={updatesTextBold}>Phuture</span>{' '}
                    and its ecosystem
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className={footer}>
        <div className={footerIconsContainer}>
          <Link target="_blank" rel="noreferrer" href="https://phuture.gitbook.io/phuture/">
            <img className={iconsMargin} src={GitbookIcon} alt="gitbook-in-icon" />
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://github.com/Phuturedao">
            <img className={iconsMargin} src={GitIcon} alt="github-in-icon" />
          </Link>
          <Link target="_blank" rel="noreferrer" href="http://discord.gg/frRD3Ck">
            <img className={iconsMargin} src={DiscordIcon} alt="discord-icon" />
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/phuture-finance/">
            <img className={iconsMargin} src={LinkedInIcon} alt="linked-in-icon" />
          </Link>
          <Link target={'_blank'} rel="noreferrer" href="https://phuture-finance.medium.com/">
            <img className={iconsMargin} src={MediumIcon} alt="medium-icon" />
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://t.me/phuture_group">
            <img className={iconsMargin} src={TelegramIcon} alt="telegram-icon" />
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://twitter.com/phuturedao">
            <img className={iconsMargin} src={TwitterIcon} alt="twitter-icon" />
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Landing
