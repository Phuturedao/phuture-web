import { Button } from '@material-ui/core'
import HeaderLogo from 'assets/icons/HeaderLogo.svg'
import React from 'react'
import { useStyles } from './styles'

export const LandingHeader = (): JSX.Element => {
  const { wrap, logoContainer, logo, buttonStyles } = useStyles()
  return (
    <header className={wrap}>
      <div className={logoContainer}>
        <img className={logo} src={HeaderLogo} />
      </div>
      <Button variant="outlined" classes={{ root: buttonStyles }}>
        App Сoming Soon
      </Button>
    </header>
  )
}
