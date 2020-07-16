import "./input-search.scss";

import React, { FunctionComponent } from "react";

type Props = {
  placeholder?: string;
  noborder?: boolean;
};

const InputSearch: FunctionComponent<Props> = ({
  placeholder = "",
  noborder,
}) => (
  <div className="input-search">
    <input
      type="text"
      placeholder={placeholder}
      className={`${noborder ? "noborder" : ""}`}
    />
  </div>
);

export default InputSearch;
