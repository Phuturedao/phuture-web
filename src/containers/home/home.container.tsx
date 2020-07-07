import "./home.scss";

import React, { FunctionComponent } from "react";

import CardGeneral from "components/cards/card-general/card-general.component";
import Container from "layouts/container";
import Default from "layouts/default.layout";
import { Link } from "react-router-dom";
import Table from "components/table/table.component";

const HomeContainer: FunctionComponent = () => (
  <Default>
    <div className="home-module">
      <Container>
        <header className="main-module-header">
          <h1 className="heading">
            PhutureDAO provides a range of benchmark INDEXES for Crypto
          </h1>
          <Link className="button" to={`/all-indexes`}>
            All Indexes
          </Link>
        </header>

        <section className="top-index-section">
          <header>
            <h2 className="heading">Top Index</h2>
            <p>
              The DeFi Index - Top 5 (Market Cap) <br />
              Index price <b>$78 or 0.34 ETH</b> / % Change 24h total index{" "}
              <b>+55</b>
            </p>
          </header>

          <div className="content">
            <Table />
          </div>
        </section>

        <section className="what-we-do-section">
          <header>
            <h2 className="heading">What We Do</h2>
            <p>
              PhutureDAO is an algorithmic, autonomous index protocol built for
              the community, to unlock a universe of open applications with one
              token.
            </p>

            <Link className="button alternative" to={"/how-it-works"}>
              Learn More
            </Link>
          </header>

          <div className="content">
            <div className="cards">
              <CardGeneral
                icon="spread"
                title="Access"
                description="Gain access to one of the many PhutureDAO indees with EIth, USDC and DAI."
              />

              <CardGeneral
                icon="create"
                title="Create"
                description="PhutureDAO allows you to create you own index."
              />

              <CardGeneral
                icon="key"
                title="Non-Custodial"
                description="PhutureDAO doesn’t hold any user funds. We simple provide access to a basket of crypto assets."
              />
            </div>
          </div>
        </section>
      </Container>
    </div>
  </Default>
);

export default HomeContainer;
