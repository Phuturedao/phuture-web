import "./individual-index.scss";

import React, { FunctionComponent } from "react";

import Container from "layouts/container";
import Default from "layouts/default.layout";
import IndexStats from "components/sections/index-stats/index-stats.component";

const IndividualIndexContainer: FunctionComponent = () => (
  <Default navigation={{ account: "0x9E39...6D94" }}>
    <div className="individual-index-module">
      <Container>
        <IndexStats />
      </Container>
    </div>
  </Default>
);

export default IndividualIndexContainer;
