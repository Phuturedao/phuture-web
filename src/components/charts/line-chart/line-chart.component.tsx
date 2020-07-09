import "./line-chart.scss";

import React, { FunctionComponent } from "react";

import chartSrc from "assets/imgs/chart.png";

const LineChart: FunctionComponent = () => (
  <div className="line-chart">
    <img src={chartSrc} alt="line chart" />
  </div>
);

export default LineChart;
