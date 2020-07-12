import "./input-search.scss";

import React, { FunctionComponent } from "react";

const InputSearch: FunctionComponent = () => (
  <div className="input-search">
    <input type="text" placeholder="Search token by name or address" />
  </div>
);

export default InputSearch;
