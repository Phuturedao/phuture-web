import HeaderLogo from 'assets/icons/HeaderLogo.svg'
import SearchIcon from 'assets/icons/SearchIcon.svg'
import { WalletButton } from 'components/buttons'
import ModalFunds from 'components/funds_modal'
import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GOVERNANCE, INDICES, STAKING, VAULT } from 'routes'
import { colors } from 'utils/mui'
import { useStyles } from './styles'

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
    balanceBox,
    blueBox,
    balanceText,
  } = useStyles()

  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <header className={wrap}>
      <div className={logoContainer}>
        <img alt="header-logo" src={HeaderLogo} />
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
            <NavLink to={GOVERNANCE} className={navLinkContainer} activeClassName={navLinkActiveContainer}>
              <span>{'header_menu_governance'.localized()}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={VAULT} className={navLinkContainer} activeClassName={navLinkActiveContainer}>
              <span>{'header_menu_vault'.localized()}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div style={{ display: 'flex', flexDirection: 'row', width: '320px', justifyContent: 'flex-end' }}>
        {activeWeb3Account && (
          <div className={balanceBox} onClick={handleOpenModal}>
            <div className={blueBox} />
            <span className={balanceText}>100 PHTR</span>
          </div>
        )}
        <div className={searchIcon}>
          <img src={SearchIcon} alt="search-icon" />
        </div>
        <WalletButton activateWeb3Account={activateWeb3Account} activeWeb3Account={activeWeb3Account} />
      </div>
      <ModalFunds balance={1000000} open={openModal} handleClose={handleCloseModal} />
    </header>
  )
}
