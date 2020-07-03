import "./coming-soon.scss";

import React, { FunctionComponent } from "react";

import DiscordLogo from "assets/svgs/discord";
import Email from "assets/svgs/email";
import Logo from "assets/svgs/phuture-logo";
import MediumLogo from "assets/svgs/medium";

const ComingSoonContainer: FunctionComponent = () => (
  <div className="coming-soon-module">
    <header>
      <nav>
        <div className="container">
          <div className="logo">
            <Logo />
            <span>PhutureDAO</span>
          </div>
        </div>
      </nav>
    </header>

    <div className="container">
      <div className="heading-wrapper">
        <h1 className="heading">
          PhutureDAO provides a range of benchmark INDEXES for Crypto
        </h1>
      </div>

      <div className="message">
        <p>
          PhutureDAO is an algorithmic, autonomous index protocol built for the
          community, to unlock a universe of open applications with one token.
        </p>
        <p>
          LAUNCHING SOON... <Logo className="rotate" />
        </p>
      </div>

      <div className="contact-us">
        <h3 className="sub-heading">Contact Us</h3>
        <ul>
          <li>
            <a
              href="mailto:info@phuturedao.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Email />
              info@phuturedao.com
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/frRD3Ck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordLogo />
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@PhutureDAO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MediumLogo />
              Medium
            </a>
          </li>
        </ul>
      </div>
    </div>

    <footer>
      <div className="container">
        <div className="owner">©PhutureDAO, 2020</div>
      </div>
    </footer>
  </div>
);

export default ComingSoonContainer;
