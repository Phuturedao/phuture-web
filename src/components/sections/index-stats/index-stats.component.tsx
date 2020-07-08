import "./index-stats.scss";

import React, { FunctionComponent } from "react";

type Props = {
  className?: string;
  title?: string;
  value?: string;
  valueSuffix?: any;
};

const IndexStat: FunctionComponent<Props> = ({
  className,
  title,
  value,
  valueSuffix,
}) => (
  <div className={`stat ${className ?? ""}`}>
    <div className="title">{title}</div>
    <div className="value">
      <span>{value}</span>
      {valueSuffix}
    </div>
  </div>
);

const IndexDescription: FunctionComponent = () => (
  <section className="index-stats-component">
    <header>
      <h2 className="heading">DeFI Index</h2>
    </header>
    <div className="stats">
      <IndexStat
        title="Price"
        value="$100 / 0.04ETH"
        valueSuffix={<span className="up suffix">+55%</span>}
      />

      <IndexStat title="MarketCap" value="2.5BLN" />
      <IndexStat title="High" value="2.5BLN" />
      <IndexStat title="Low" value="0.000" />
      <IndexStat title="Type" value="AAA" />
      <IndexStat title="Emission date" value="25 Oct 2020, 01:00" />
    </div>

    <div className="stats">
      <IndexStat
        className="description"
        title="Description"
        value="This Index is made up of 9 assets which are equally weighted…."
      />
    </div>
  </section>
);

export default IndexDescription;
