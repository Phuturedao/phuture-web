import "./header.scss";

import React, { FunctionComponent, useState } from "react";

import AccountModal from "components/modals/account-modal/account-modal.component";
import Container from "layouts/container";
import { Link } from "react-router-dom";
import PhutureLogo from "assets/svgs/phuture-logo";

const Logo: FunctionComponent<any> = ({ index }) => (
  <a href="/home">
    <div className="logo">
      <PhutureLogo /> <div className="divider"></div>
      <span>PhutureDAO</span>
      {index && (
        <span className="index-link">
          / <span className="index-name">{index}</span>
        </span>
      )}
    </div>
  </a>
);

type Props = {
  account?: string;
  isAccountModal?: boolean;
  index?: string;
  isAllIndexes?: boolean;
};

const HeaderComponent: FunctionComponent<Props> = ({
  account,
  isAllIndexes = true,
  isAccountModal = false,
  index,
}) => {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  return (
    <header className="header-component" aria-label="main header">
      <Container>
        <nav className="top-nav" aria-label="top navigation">
          <Logo index={index} />

          <div>
            <div className="nav-links">
              <Link to={`/how-it-works`}>How it works</Link>

              {isAllIndexes && !account && (
                <Link to={`/all-indexes`} className="button">
                  All indexes
                </Link>
              )}

              {isAllIndexes && account && (
                <Link to={`/all-indexes`}>All indexes</Link>
              )}

              {account && !isAccountModal && (
                <a href="/account" className="button alternative">
                  {account}
                </a>
              )}

              {account && isAccountModal && (
                <button
                  className="button alternative"
                  onClick={() => {
                    setIsAccountModalOpen(true);
                  }}
                >
                  {account}
                </button>
              )}
            </div>
          </div>
        </nav>
      </Container>

      <AccountModal
        isOpen={isAccountModalOpen}
        onClose={() => {
          setIsAccountModalOpen(false);
        }}
      />
    </header>
  );
};

export default HeaderComponent;
