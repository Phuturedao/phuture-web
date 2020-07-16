import "./all-indexes.scss";

import React, { FunctionComponent } from "react";

import AssetCards from "components/sections/asset-cards/asset-cards.component";
import Container from "layouts/container";
import Default from "layouts/default.layout";
import SearchInput from "components/inputs/input-search/input-search.component";

const AllIndexesContainer: FunctionComponent = () => (
  <Default navigation={{ account: "0x9E39...6D94", isAllIndexes: false }}>
    <div className="all-indexes-module">
      <Container>
        <header>
          <h1 className="heading">All Indexes</h1>

          <div className="search-block">
            <div className="wrapper">
              <SearchInput placeholder="Search indexes" />
            </div>
            <button className="button large alternative">Search</button>
          </div>
        </header>

        <AssetCards title="Asset Index" />
        <AssetCards title="Venture Portfolio Index" />
        <AssetCards title="Other Indexes" />
      </Container>
    </div>
  </Default>
);

export default AllIndexesContainer;
