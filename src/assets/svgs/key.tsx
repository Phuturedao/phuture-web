import React, { FunctionComponent } from "react";

type PropTypes = {
  className?: string;
};

const KeyIcon: FunctionComponent<PropTypes> = (props) => (
  <svg
    width="57"
    height="57"
    viewBox="0 0 57 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="36.3345"
      y="0.919239"
      width="27.7"
      height="14.006"
      rx="3.35"
      transform="rotate(45 36.3345 0.919239)"
      stroke="black"
      strokeWidth="1.3"
    />
    <line
      x1="35.8705"
      y1="21.1823"
      x2="10.3592"
      y2="46.6936"
      stroke="black"
      strokeWidth="1.3"
    />
    <rect
      x="23.0417"
      y="34.011"
      width="7.98499"
      height="10.7261"
      transform="rotate(45 23.0417 34.011)"
      stroke="black"
      strokeWidth="1.3"
    />
    <line
      x1="38.9134"
      y1="12.4824"
      x2="44.3581"
      y2="17.9271"
      stroke="black"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

export default KeyIcon;
