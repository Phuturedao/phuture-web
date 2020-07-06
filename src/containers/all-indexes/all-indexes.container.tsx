import "./all-indexes.scss";

import React, { FunctionComponent } from "react";

import AssetCards from "components/sections/asset-cards/asset-cards.component";
import Container from "layouts/container";
import Default from "layouts/default.layout";

const AllIndexesContainer: FunctionComponent = () => (
  <Default navigation={{ account: "0x9E39...6D94", isAllIndexes: false }}>
    <div className="all-indexes-module">
      <Container>
        <header>
          <h1 className="heading">All Indexes</h1>
        </header>

        <AssetCards title="Asset Index" />
        <AssetCards title="Venture Portfolio Index" />
      </Container>
    </div>
  </Default>
);

export default AllIndexesContainer;
