import "./home.scss";

import React, { FunctionComponent } from "react";

import Container from "layouts/container";
import Default from "layouts/default.layout";

const HomeContainer: FunctionComponent = () => (
  <Default>
    <div className="home-module">
      <Container>
        <header className="main-module-header">
          <h1 className="heading">
            PhutureDAO provides a range of benchmark INDEXES for Crypto
          </h1>
          <button className="button">All Indexes</button>
        </header>

        <section className="top-index-section">
          <header>
            <h2 className="heading">Top Index</h2>
            <p>
              The DeFi Index - Top 5 (Market Cap) <br />
              Index price <b>$78 or 0.34 ETH</b> / % Change 24h total index
              <b>+55</b>
            </p>
          </header>
        </section>
      </Container>
    </div>
  </Default>
);

export default HomeContainer;
