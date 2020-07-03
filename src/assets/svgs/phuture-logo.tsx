import React, { FunctionComponent } from "react";

type PropTypes = {
  className?: string;
};

const PhutureLogo: FunctionComponent<PropTypes> = (props) => (
  <svg
    width="35"
    height="40"
    viewBox="0 0 35 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.5255 0L35 9.96163V29.9862L17.5255 40L0 29.9871V9.96072L17.5255 0ZM2.12316 11.1769V28.7741L17.5239 37.573L32.8768 28.775V11.176L17.5239 2.4238L2.12316 11.1769Z"
      fill="#1D1D1B"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.6052 39.3122L0.14209 11.0945L1.9808 10.0439L17.5232 36.6835L33.0182 10.0451L34.8583 11.0933L18.4446 39.311L16.6052 39.3122Z"
      fill="#1D1D1B"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.5233 3.31214L1.98049 29.9061L0.142578 28.8543L16.6057 0.685547L18.4443 0.686732L34.858 28.8555L33.0187 29.905L17.5233 3.31214Z"
      fill="#1D1D1B"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M28.4507 21.0248H6.54932V18.9238H28.4507V21.0248Z"
      fill="#1D1D1B"
    />
  </svg>
);

export default PhutureLogo;
