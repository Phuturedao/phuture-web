import { Button, Link } from '@material-ui/core'
import HeaderLogo from 'assets/icons/HeaderLogo.svg'
import React from 'react'
import { useStyles } from './styles'

export const LandingHeader = (): JSX.Element => {
  const { wrap, logoContainer, logo, buttonContainer, blogButton, appButton } = useStyles()
  return (
    <header className={wrap}>
      <div className={logoContainer}>
        <img className={logo} src={HeaderLogo} />
      </div>
      <div>
        <Link className={buttonContainer} target={'_blank'} href="https://phuture.gitbook.io/phuture/">
          <Button variant="outlined" className={blogButton}>
            {'landing_header_blog_button'.localized()}
          </Button>
        </Link>
        <Button variant="outlined" className={appButton}>
          {'landing_header_app_button'.localized()}
        </Button>
      </div>
    </header>
  )
}
