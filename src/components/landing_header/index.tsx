import { Button, Link } from '@material-ui/core'
import HeaderLogo from 'assets/icons/headerIcon.svg'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { LANDING } from 'routes'
import { useStyles } from './styles'

export const LandingHeader = (): JSX.Element => {
  const { wrap, logoContainer, buttonsContainer, blogButtonContainer, blogButton, appButton } = useStyles()
  const history = useHistory()
  return (
    <header className={wrap}>
      <div onClick={() => history.push(LANDING)} className={logoContainer}>
        <img src={HeaderLogo} alt="header-logo" />
      </div>
      <div className={buttonsContainer}>
        <Link
          className={blogButtonContainer}
          rel="noreferrer"
          target={'_blank'}
          href="https://phuture-finance.medium.com/"
        >
          <Button variant="outlined" className={blogButton}>
            {'landing_header_blog_button'.localized()}
          </Button>
        </Link>
        <Link className={blogButtonContainer} target="_blank" rel="noreferrer" href="https://app.phuture.finance/">
          <Button variant="outlined" className={appButton}>
            {'landing_header_app_button'.localized()}
          </Button>
        </Link>
      </div>
    </header>
  )
}
