import "./input-subscribe.scss";

import React, { FunctionComponent } from "react";

import NextIcon from "assets/svgs/next";

const Subscribe: FunctionComponent = () => (
  <div className="input-subscribe">
    <input type="email" placeholder="Enter your email" /> <NextIcon />
  </div>
);

export default Subscribe;
