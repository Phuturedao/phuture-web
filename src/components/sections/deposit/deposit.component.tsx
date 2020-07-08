import "./deposit.scss";

import React, { FunctionComponent } from "react";

import InputSelect from "components/inputs/input-select/input-select.component";
import SwitchIcon from "assets/svgs/switch";

const DepositSection: FunctionComponent = () => (
  <section className="deposit-section">
    <div className="flex-layout">
      <div className="inputs">
        <div>
          <label>From</label>
          <InputSelect />
        </div>
        <div className="switcher">
          <SwitchIcon />
        </div>
        <div>
          <label>To</label>
          <InputSelect />
        </div>
      </div>
      <div className="flex-item-button">
        <button className="button">Deposit</button>
      </div>
    </div>
    <div>
      <div className="totals">
        <div>
          <span className="label">Total:</span>
          <span className="value">0.5 ETH</span>
        </div>

        <div>
          <span className="label">Fee:</span>
          <span className="value">0.1 ETH</span>
        </div>
      </div>
      <p>Max amount sent may vary due to contract costs</p>
    </div>
  </section>
);

export default DepositSection;
