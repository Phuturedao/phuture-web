import "./asset-stats.scss";

import React, { FunctionComponent } from "react";

import DonutChart from "components/charts/donut-chart/donut-chart.component";
import ETH from "assets/svgs/eth";
import LineChart from "components/sections/line-chart-section/line-chart-section.component";
import PTHR from "assets/imgs/phtr.png";

export const PriceStats: FunctionComponent = () => (
  <section className="price-stats">
    <header>
      <h5 className="heading">Title</h5>
      <div className="stats">
        <div>$100</div>
        <div>
          <ETH /> 0.4 ETH
        </div>
        <div>
          <img src={PTHR} alt="phuture dao logo" /> 1.00 PHTR
        </div>
      </div>
    </header>
  </section>
);

export const ProfitLoss: FunctionComponent = () => (
  <section className="profit-loss">
    <div className="chart">
      <DonutChart />
    </div>
    <div>
      <div className="title">24h Gain/Loss</div>
      <div className="value down">-24%</div>
    </div>
    <div>
      <div className="title">24h Gain/Loss</div>
      <div className="value up">+24%</div>
    </div>
  </section>
);

const AssetStats: FunctionComponent = () => (
  <section className="asset-stats">
    <div>
      <PriceStats />
      <ProfitLoss />
    </div>
    <div>
      <LineChart chart={{ height: 163 }} />
    </div>
  </section>
);

export default AssetStats;
