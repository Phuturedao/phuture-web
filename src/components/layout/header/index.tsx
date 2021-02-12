import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { SWAP, INDEXES, POOLS, STATS } from 'routes'
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
            <NavLink to={INDEXES} className={navLinkContainer} activeClassName={navLinkActiveContainer}>
              <span>{'header_menu_item_1'.localized()}</span>
            </NavLink>
          </li>
          <li style={{ marginRight: '30px' }}>
            <NavLink exact to={POOLS} className={navLinkContainer} activeClassName={navLinkActiveContainer}>
              <span>{'header_menu_item_2'.localized()}</span>
            </NavLink>
          </li>
          <li style={{ marginRight: '30px' }}>
            <NavLink exact to={SWAP} className={navLinkContainer} activeClassName={navLinkActiveContainer}>
              <span>{'header_menu_item_3'.localized()}</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to={STATS} className={navLinkContainer} activeClassName={navLinkActiveContainer}>
              <span>{'header_menu_item_4'.localized()}</span>
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
