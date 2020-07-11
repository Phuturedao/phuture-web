import "./line-chart-section.scss";

import React, { FunctionComponent } from "react";

import LineChart from "components/charts/line-chart/line-chart.component";

type Props = {
  chart?: {
    height?: number;
  };
};

const LineChartSection: FunctionComponent<Props> = ({ chart }) => (
  <section className="line-chart-section">
    <div className="actions">
      <button className="button inactive small">All time</button>
      <button className="button small">One week</button>
    </div>
    <LineChart {...chart} />
  </section>
);

export default LineChartSection;
