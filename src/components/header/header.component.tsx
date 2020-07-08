import "./header.scss";

import React, { FunctionComponent } from "react";

import Container from "layouts/container";
import { Link } from "react-router-dom";
import PhutureLogo from "assets/svgs/phuture-logo";

const Logo: FunctionComponent<any> = () => (
  <a href="/home">
    <div className="logo">
      <PhutureLogo /> <div className="divider"></div>
      <span>PhutureDAO</span>
    </div>
  </a>
);

type Props = {
  account?: string;
  isAllIndexes?: boolean;
};

const HeaderComponent: FunctionComponent<Props> = ({
  account,
  isAllIndexes = true,
}) => (
  <header className="header-component" aria-label="main header">
    <Container>
      <nav className="top-nav" aria-label="top navigation">
        <Logo />
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

            {account && (
              <a href="/" className="button alternative">
                {account}
              </a>
            )}
          </div>
        </div>
      </nav>
    </Container>
  </header>
);

export default HeaderComponent;
