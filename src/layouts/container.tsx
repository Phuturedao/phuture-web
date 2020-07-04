import "./container.scss";

import React, { FunctionComponent } from "react";

const Container: FunctionComponent = ({ children }) => (
  <div className="container">{children}</div>
);

export default Container;
