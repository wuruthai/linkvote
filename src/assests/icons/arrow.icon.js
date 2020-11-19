import React from 'react';

const ArrowIcon = ({ up, ...props }) => (
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="14px"
    height="14px"
    viewBox="0 0 32.75 32.75"
    style={{
      transform: up && 'rotate(180deg)',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <path
        d="M29.975,22.449l-11.011,9.35c-0.745,0.635-1.667,0.951-2.589,0.951c-0.921,0-1.842-0.316-2.589-0.951l-11.01-9.35
      c-1.684-1.432-1.89-3.955-0.46-5.639c1.43-1.686,3.955-1.892,5.639-0.459l4.42,3.754V4c0-2.209,1.791-4,4-4c2.208,0,4,1.791,4,4
      v16.105l4.421-3.754c1.686-1.43,4.209-1.225,5.639,0.459S31.657,21.02,29.975,22.449z"
      />
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);

export default ArrowIcon;
