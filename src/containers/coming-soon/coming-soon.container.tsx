import "./coming-soon.scss";

import React, { FunctionComponent } from "react";

import Logo from "assets/svgs/phuture-logo";

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
          Coming Soon... <Logo className="rotate" />
        </p>
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
