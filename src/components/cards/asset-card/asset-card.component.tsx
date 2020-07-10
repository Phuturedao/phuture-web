import "./asset-card.scss";

import React, { FunctionComponent } from "react";

import { Link } from "react-router-dom";

const AssetCard: FunctionComponent = () => (
  <div className="asset-card">
    <Link to="/indexes/DeFi">
      <div className="title">DeFI Index</div>
      <div className="rate">$100 / 0.04 ETH</div>
      <div className="total">
        <div className="total-value">$2,456,235.00</div>
        <div className="total-percentage up">+55%</div>
      </div>
    </Link>
  </div>
);

export default AssetCard;
