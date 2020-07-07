import "./faq.scss";

import React, { FunctionComponent } from "react";

import Container from "layouts/container";
import Default from "layouts/default.layout";
import FaqSection from "components/sections/faq-section/faq-section.component";

const FaqContainer: FunctionComponent = () => (
  <Default>
    <div className="faq-module">
      <Container>
        <div className="content">
          <FaqSection
            title="What is PhutureDAO?"
            description={`PhutureDAO is a simple yet powerful decentralised platform that provides exposure to crypto assets through a straightforward index token.`}
          />
          <FaqSection
            title="What is an index?"
            description="An index represents the total value of a basket of assets proportional to their individual weightings.<br/><br/> The PhutureDAO platform will allow for the creation of indices that support up to 10 ERC-20 crypto assets. Indices can be weighted through a number of methods including by market capitalisation, equally weighted or fixed percentage split. <br/><br/> Allowing investors to access a diversified set of crypto assets by purchasing a single PhutureDAO index."
          />
          <FaqSection
            title="Creating a PhutureDAO index?"
            description="PhutureDAO is an open platform that allows anyone to create an index in a few clicks.<br/><br/> Select the assets to include, select their weightings and use the default options to initialise an index.<br/><br/> Advanced options allow for private or public indices which are either tradeable or non-tradeable."
          />
          <FaqSection
            title="How does it work?"
            description="Select a PhutureDAO index <br/><br/> Deposit ETH, USDC, USDT or DAI <br/><br/> Receive index token into your wallet <br/><br/> Track and analyse your index from within the PhutureDAO vault"
          />
        </div>
      </Container>
    </div>
  </Default>
);

export default FaqContainer;
