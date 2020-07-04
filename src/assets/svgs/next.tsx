import React, { FunctionComponent } from "react";

type PropTypes = {
  className?: string;
};

const NextIcon: FunctionComponent<PropTypes> = (props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="16" cy="16" r="16" fill="black" />
    <path
      d="M8 16L24 16"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 10L24 16L18 22"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default NextIcon;
