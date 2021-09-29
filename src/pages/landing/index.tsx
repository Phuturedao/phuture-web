import { Button, Container, FormControlLabel, Input, Link } from '@material-ui/core'
import { notifyError, notifySuccess } from 'App'
import DiscordIcon from 'assets/icons/landing/DiscordIcon.svg'
import FirstBoxIcon from 'assets/icons/landing/FirstBoxIcon.svg'
import FourthBoxIcon from 'assets/icons/landing/FourthBoxIcon.svg'
import GitbookIcon from 'assets/icons/landing/GitbookIcon.svg'
import GitIcon from 'assets/icons/landing/GitIcon.svg'
import LinkedInIcon from 'assets/icons/landing/LinkedInIcon.svg'
import MediumIcon from 'assets/icons/landing/MediumIcon.svg'
import angel_1 from 'assets/icons/landing/partners/angel_1.svg'
import logo_1 from 'assets/icons/landing/partners/logo_1.svg'
import logo_10 from 'assets/icons/landing/partners/logo_10.svg'
import logo_2 from 'assets/icons/landing/partners/logo_2.svg'
import logo_3 from 'assets/icons/landing/partners/logo_3.svg'
import logo_4 from 'assets/icons/landing/partners/logo_4.svg'
import logo_5 from 'assets/icons/landing/partners/logo_5.svg'
import logo_6 from 'assets/icons/landing/partners/logo_6.svg'
import logo_7 from 'assets/icons/landing/partners/logo_7.svg'
import logo_8 from 'assets/icons/landing/partners/logo_8.svg'
import SecondBoxIcon from 'assets/icons/landing/SecondBoxIcon.svg'
import SecondBoxIconSmall from 'assets/icons/landing/SecondBoxIconSmall.svg'
import TelegramIcon from 'assets/icons/landing/TelegramIcon.svg'
import ThirdBoxIcon from 'assets/icons/landing/ThirdBoxIcon.svg'
import TwitterIcon from 'assets/icons/landing/TwitterIcon.svg'
import { CustomCheckbox } from 'components/landing_checkbox'
import { LandingHeader } from 'components/landing_header'
import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { PRIVACY_POLICY } from 'routes'
import useWindowDimensions from 'services/resizeManager'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

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
    partnersContainer,
    partnersTitle,
    partnerItem,
    threeItemsRow,
    twoItemsRow,
    oneItem,
    angelsContainer,
    angelItem,
    footer,
    footerIconsContainer,
    iconsMargin,
    privacyLink,
  } = useStyles()

  const { width, height } = useWindowDimensions()
  const [checked, setChecked] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const partnersArr = [
    {
      name: 'landing_partners_item_1'.localized(),
      link: 'https://ascensiveassets.com',
      logo: logo_1,
    },
    { name: 'landing_partners_item_2'.localized(), link: 'https://www.ngc.fund/', logo: logo_2 },
    { name: 'landing_partners_item_3'.localized(), link: 'http://www.7xvc.com/', logo: logo_3 },
    {
      name: 'landing_partners_item_4'.localized(),
      link: 'https://www.theorigincapital.com/',
      logo: logo_4,
    },
    { name: 'landing_partners_item_5'.localized(), link: 'http://waterdrip.io/', logo: logo_5 },
    {
      name: 'landing_partners_item_6'.localized(),
      link: 'https://www.moonrockcapital.io/',
      logo: logo_6,
    },
    { name: 'landing_partners_item_7'.localized(), link: 'https://d64.vc/', logo: logo_7 },
    { name: 'landing_partners_item_8'.localized(), link: 'https://genblock.capital/', logo: logo_8 },
    {
      name: 'landing_partners_item_10'.localized(),
      link: 'https://www.vendetta.capital/',
      logo: logo_10,
    },
  ]

  const sendSubscribe = (email: string) => {
    fetch('https://phuture.pragma-dev.space/subscribe', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then((response) => {
      if (response.status !== 201) {
        notifyError()
      } else {
        notifySuccess()
      }
      return response.json()
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  return (
    <Container className={container}>
      <LandingHeader />
      <div style={{ marginTop: height < 750 ? '2%' : '7%' }} className={firstContainer}>
        <div className={firstLeftContainer}>
          <h2 className={firstTitle}>{'landing_first_block_title'.localized()}</h2>
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
        <img
          width={width < 575 ? '80%' : '50%'}
          height={'100%'}
          className={firstImg}
          src={FirstBoxIcon}
          alt={'tokens-icon'}
        />
      </div>
      <div className={secondContainer}>
        <div className={secondTopContainer}>
          <span className={secondTopText}>{'landing_second_block_text'.localized()}</span>
          <span className={secondTopTitle}>{'landing_second_block_title'.localized()}</span>
        </div>
        <img
          width={width < 575 ? '90%' : '100%'}
          className={secondImg}
          src={width > 575 ? SecondBoxIcon : SecondBoxIconSmall}
          alt={'chart-icon'}
        />
      </div>
      <div className={thirdContainer}>
        <div className={thirdLeftContainer}>
          <span className={thirdLeftTitle}>{'landing_third_block_title'.localized()}</span>
          <span className={thirdLeftText}>{'landing_third_block_text'.localized()}</span>
        </div>
        <img
          width={width < 575 ? '80%' : '55%'}
          height={'100%'}
          className={thirdImg}
          src={ThirdBoxIcon}
          alt={'liquidity-icon'}
        />
      </div>
      <div className={fourthContainer}>
        {width > 575 && (
          <img width={'50%'} height={'100%'} className={fourthImg} src={FourthBoxIcon} alt={'protocol-lego-icon'} />
        )}
        <div className={fourthRightContainer}>
          <span className={fourthRightTitle}>{'landing_fourth_block_title'.localized()}</span>
          <span className={fourthRightText}>{'landing_fourth_block_text'.localized()}</span>
          {width <= 575 && <img width={'70%'} className={fourthImg} src={FourthBoxIcon} alt={'protocol-lego-icon'} />}
        </div>
      </div>
      {width > 1070 ? (
        <div className={partnersContainer}>
          <span className={partnersTitle}>{'landing_partners_title'.localized()}</span>
          <div className={threeItemsRow}>
            <Link className={partnerItem} target="_blank" rel="noreferrer" href={partnersArr[0].link}>
              <img src={partnersArr[0].logo} alt="partner-icon-1" />
            </Link>
            <Link
              style={{ width: '305px' }}
              className={partnerItem}
              target="_blank"
              rel="noreferrer"
              href={partnersArr[1].link}
            >
              <img src={partnersArr[1].logo} alt="partner-icon-2" />
            </Link>
            <Link
              style={{ width: '295px' }}
              className={partnerItem}
              target="_blank"
              rel="noreferrer"
              href={partnersArr[2].link}
            >
              <img src={partnersArr[2].logo} alt="partner-icon-3" />
            </Link>
          </div>
          <div className={threeItemsRow}>
            <Link className={partnerItem} target="_blank" rel="noreferrer" href={partnersArr[3].link}>
              <img src={partnersArr[3].logo} alt="partner-icon-4" />
            </Link>
            <Link
              style={{ width: '375px' }}
              className={partnerItem}
              target="_blank"
              rel="noreferrer"
              href={partnersArr[4].link}
            >
              <img src={partnersArr[4].logo} alt="partner-icon-5" />
            </Link>
            <Link
              style={{ width: '295px' }}
              className={partnerItem}
              target="_blank"
              rel="noreferrer"
              href={partnersArr[5].link}
            >
              <img src={partnersArr[5].logo} alt="partner-icon-6" />
            </Link>
          </div>
          <div className={threeItemsRow}>
            <Link className={partnerItem} target="_blank" rel="noreferrer" href={partnersArr[6].link}>
              <img src={partnersArr[6].logo} alt="partner-icon-7" />
            </Link>
            <Link
              style={{ width: '300px' }}
              className={partnerItem}
              target="_blank"
              rel="noreferrer"
              href={partnersArr[7].link}
            >
              <img src={partnersArr[7].logo} alt="partner-icon-8" />
            </Link>
            <Link
              style={{ width: '295px' }}
              className={partnerItem}
              target="_blank"
              rel="noreferrer"
              href={partnersArr[8].link}
            >
              <img src={partnersArr[8].logo} alt="partner-icon-9" />
            </Link>
          </div>
        </div>
      ) : width > 870 && width < 1070 ? (
        <div className={partnersContainer}>
          <span className={partnersTitle}>{'landing_partners_title'.localized()}</span>
          <div className={twoItemsRow}>
            <Link className={partnerItem} target="_blank" rel="noreferrer" href={partnersArr[0].link}>
              <img src={partnersArr[0].logo} alt="partner-icon-1" />
            </Link>
            <Link className={partnerItem} target="_blank" rel="noreferrer" href={partnersArr[1].link}>
              <img src={partnersArr[1].logo} alt="partner-icon-2" />
            </Link>
          </div>
          <div className={twoItemsRow}>
            <Link className={partnerItem} target="_blank" rel="noreferrer" href={partnersArr[2].link}>
              <img src={partnersArr[2].logo} alt="partner-icon-3" />
            </Link>
            <Link className={partnerItem} target="_blank" rel="noreferrer" href={partnersArr[3].link}>
              <img src={partnersArr[3].logo} alt="partner-icon-4" />
            </Link>
          </div>
          <div className={twoItemsRow}>
            <Link className={partnerItem} target="_blank" rel="noreferrer" href={partnersArr[4].link}>
              <img src={partnersArr[4].logo} alt="partner-icon-5" />
            </Link>
            <Link className={partnerItem} target="_blank" rel="noreferrer" href={partnersArr[5].link}>
              <img src={partnersArr[5].logo} alt="partner-icon-6" />
            </Link>
          </div>
          <div className={twoItemsRow}>
            <Link className={partnerItem} target="_blank" rel="noreferrer" href={partnersArr[6].link}>
              <img src={partnersArr[6].logo} alt="partner-icon-7" />
            </Link>
            <Link className={partnerItem} target="_blank" rel="noreferrer" href={partnersArr[7].link}>
              <img src={partnersArr[7].logo} alt="partner-icon-8" />
            </Link>
          </div>
          <Link className={oneItem} target="_blank" rel="noreferrer" href={partnersArr[8].link}>
            <img src={partnersArr[8].logo} alt="partner-icon-9" />
          </Link>
        </div>
      ) : (
        <div className={partnersContainer}>
          <span className={partnersTitle}>{'landing_partners_title'.localized()}</span>
          {partnersArr.map((item, index) => (
            <Link key={index} className={oneItem} target="_blank" rel="noreferrer" href={item.link}>
              <img src={item.logo} alt="partner-logo" />
            </Link>
          ))}
        </div>
      )}
      <div style={{ textAlign: 'center', width: '100%', marginTop: '50px' }}>
        <span className={partnersTitle}>{'landing_partners_angels_title'.localized()}</span>
      </div>
      <div className={angelsContainer}>
        <Link className={angelItem} target="_blank" rel="noreferrer" href={'https://quantstamp.com/'}>
          <img src={angel_1} alt="angel-icon-1" />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '36px', color: colors.white }}>{'landing_partners_angel_1_name'.localized()}</span>
            <span style={{ fontSize: '18px', color: colors.white }}>
              {'landing_partners_angel_1_title'.localized()}
            </span>
          </div>
        </Link>
        <Link
          style={{
            marginLeft: width <= 575 ? '40px' : '70px',
            maxWidth: width <= 575 ? '100%' : width <= 900 ? '300px' : '400px',
          }}
          className={angelItem}
          target="_blank"
          rel="noreferrer"
          href={'https://exchange.bitcoin.com/'}
        >
          {/* TODO: uncomment and change an icon after getting info from Oliver */}
          {/* <img height={45} src={'https://exchange.bitcoin.com/images/uploads/exchange.png'} alt="angel-link-icon-1" /> */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '36px', color: colors.white }}>{'landing_partners_angel_2_name'.localized()}</span>
            <span style={{ fontSize: '18px', color: colors.white }}>
              {'landing_partners_angel_2_title'.localized()}
            </span>
          </div>
        </Link>
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
        <RouterLink className={privacyLink} target="_blank" rel="noopener noreferrer" to={PRIVACY_POLICY}>
          Privacy policy
        </RouterLink>
        <div>
          <div className={fourthRightButtons}>
            <Input
              type={'email'}
              inputProps={{ min: 0, style: { textAlign: 'center' } }}
              className={emailButton}
              placeholder={'landing_fourth_block_email_button'.localized()}
              onChange={handleChange}
              value={email}
            ></Input>
            <Button disabled={!checked} onClick={() => sendSubscribe(email)} className={subscribeButton}>
              {'landing_fourth_block_subscribe_button'.localized()}
            </Button>
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
    </Container>
  )
}

export default Landing
