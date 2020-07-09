import "./line-chart-section.scss";

import React, { FunctionComponent } from "react";

import LineChart from "components/charts/line-chart/line-chart.component";

const LineChartSection: FunctionComponent = () => (
  <section className="line-chart-section">
    <LineChart />
  </section>
);

export default LineChartSection;
