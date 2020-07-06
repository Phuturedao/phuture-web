import "./asset-card.scss";

import React, { FunctionComponent } from "react";

const AssetCard: FunctionComponent = () => (
  <div className="asset-card">
    <div className="title">DeFI Index</div>
    <div className="rate">$100 / 0.04 ETH</div>
    <div className="total">
      <div className="total-value">$2,456,235.00</div>
      <div className="total-percentage up">+55%</div>
    </div>
  </div>
);

export default AssetCard;
