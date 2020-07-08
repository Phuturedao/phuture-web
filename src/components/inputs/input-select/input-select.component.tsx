import "./input-select.scss";

import React, { FunctionComponent } from "react";

const InputSelect: FunctionComponent = () => (
  <div className="input-select">
    <input type="number" placeholder="0.0" />
    <select>
      <option>ETH</option>
      <option>BTC</option>
    </select>
  </div>
);

export default InputSelect;
