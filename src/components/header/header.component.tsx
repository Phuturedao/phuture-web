import "./header.scss";

import React, { FunctionComponent } from "react";

import Container from "layouts/container";
import { Link } from "react-router-dom";
import PhutureLogo from "assets/svgs/phuture-logo";

const Logo: FunctionComponent<any> = () => (
  <a href="/">
    <div className="logo">
      <PhutureLogo /> <div className="divider"></div>
      <span>PhutureDAO</span>
    </div>
  </a>
);

const HeaderComponent: FunctionComponent<any> = () => (
  <header className="header-component" aria-label="main header">
    <Container>
      <nav className="top-nav" aria-label="top navigation">
        <Logo />
        <div>
          <div className="nav-links">
            <Link to={`/how-it-works`}>How it works</Link>
            <button className="button">All indexes</button>
          </div>
        </div>
      </nav>
    </Container>
  </header>
);

export default HeaderComponent;
