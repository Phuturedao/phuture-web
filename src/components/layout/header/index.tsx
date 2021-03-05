import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { GOVERNANCE, INDICES, STAKING, VAULT } from 'routes'
import { useStyles } from './styles'
import HeaderLogo from 'assets/icons/HeaderLogo.svg'
import { WalletButton } from 'components/buttons'
import SearchIcon from 'assets/icons/SearchIcon.svg'

interface HeaderProps {
  activeWeb3Account: string
  activateWeb3Account: () => void
}

export const Header: FC<HeaderProps> = ({ activeWeb3Account, activateWeb3Account }: HeaderProps): JSX.Element => {
  const {
    wrap,
    logoContainer,
    navLinkContainer,
    navLinkActiveContainer,
    navBarContainer,
    ulList,
    searchIcon,
  } = useStyles()
  return (
    <header className={wrap}>
      <div className={logoContainer}>
        <img src={HeaderLogo} />
      </div>
      <nav className={navBarContainer}>
        <ul className={ulList}>
          <li style={{ marginRight: '30px' }}>
            <NavLink to={INDICES} className={navLinkContainer} activeClassName={navLinkActiveContainer}>
              <span>{'header_menu_indices'.localized()}</span>
            </NavLink>
          </li>
          <li style={{ marginRight: '30px' }}>
            <NavLink to={STAKING} className={navLinkContainer} activeClassName={navLinkActiveContainer}>
              <span>{'header_menu_staking'.localized()}</span>
            </NavLink>
          </li>
          <li style={{ marginRight: '30px' }}>
            <NavLink exact to={GOVERNANCE} className={navLinkContainer} activeClassName={navLinkActiveContainer}>
              <span>{'header_menu_governance'.localized()}</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={VAULT} className={navLinkContainer} activeClassName={navLinkActiveContainer}>
              <span>{'header_menu_vault'.localized()}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className={searchIcon}>
          <img src={SearchIcon} alt="" />
        </div>
        <WalletButton activateWeb3Account={activateWeb3Account} activeWeb3Account={activeWeb3Account} />
      </div>
    </header>
  )
}
