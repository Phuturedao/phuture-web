import "./coming-soon.scss";

import React, { FunctionComponent } from "react";

import DiscordLogo from "assets/svgs/discord";
import Logo from "assets/svgs/logo";
import MediumLogo from "assets/svgs/medium";

const ComingSoonContainer: FunctionComponent = () => (
  <div className="coming-soon-module">
    <div className="container">
      <div className="wrapper">
        <header>
          <nav>
            <div className="logo">
              <Logo />
            </div>
          </nav>
        </header>

        <div className="content">
          <p>
            PhutureDAO provides a range of benchmark, programmatic indexes with
            real underlying assets, auto rebalancing functionality and a
            non-custodial architecture.
          </p>
          <a href="https://www.phuturedao.com/whitepaper.pdf" target="_blank">
            Whitepaper
          </a>
        </div>
      </div>

      <footer>
        <a
          className="email-link"
          href="mailto:info@phuturedao.com"
          rel="noopener noreferrer"
        >
          info@phuturedao.com
        </a>
        <div>
          <a
            className="medium-link"
            href="https://medium.com/@PhutureDAO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MediumLogo />
          </a>
          <a
            href="https://discord.gg/frRD3Ck"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordLogo />
          </a>
        </div>
      </footer>
    </div>
  </div>
);

export default ComingSoonContainer;
