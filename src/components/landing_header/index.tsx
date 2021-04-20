import { Button, Link } from '@material-ui/core'
import HeaderLogo from 'assets/icons/HeaderLogo.svg'
import React from 'react'
import { useStyles } from './styles'

export const LandingHeader = (): JSX.Element => {
  const { wrap, logoContainer, buttonsContainer, blogButtonContainer, blogButton, appButton } = useStyles()
  return (
    <header className={wrap}>
      <div className={logoContainer}>
        <img src={HeaderLogo} />
      </div>
      <div className={buttonsContainer}>
        <Link className={blogButtonContainer} target={'_blank'} href="https://phuture-finance.medium.com/">
          <Button variant="outlined" className={blogButton}>
            {'landing_header_blog_button'.localized()}
          </Button>
        </Link>
        <Button disabled variant="outlined" className={appButton}>
          {'landing_header_app_button'.localized()}
        </Button>
      </div>
    </header>
  )
}
