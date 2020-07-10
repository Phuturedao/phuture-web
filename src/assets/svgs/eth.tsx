import React, { FunctionComponent } from "react";

type PropTypes = {
  className?: string;
};

const ETH: FunctionComponent<PropTypes> = (props) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g filter="url(#filter0_d)">
      <rect x="2" y="2" width="22" height="22" rx="11" fill="url(#pattern0)" />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0"
        y="0"
        width="26"
        height="26"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0" transform="scale(0.00444444)" />
      </pattern>
      <image
        id="image0"
        width="225"
        height="225"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default ETH;
