import "./asset-stats.scss";

import React, { FunctionComponent } from "react";

import LineChart from "components/sections/line-chart-section/line-chart-section.component";

export const PriceStats: FunctionComponent = () => (
  <section className="price-stats">
    <header>
      <h5 className="heading">Title</h5>
      <div className="stats">
        <div>$100</div>
        <div>0.4 ETH</div>
        <div>1.00 PHTR</div>
      </div>
    </header>
  </section>
);

const AssetStats: FunctionComponent = () => (
  <section className="asset-stats">
    <div>
      <PriceStats />
    </div>
    <div>
      <LineChart />
    </div>
  </section>
);

export default AssetStats;
