import React from 'react';

const PathConnector = ({ connector: { linkTo, linkFrom, isTwoWay, isDotted } }) => (
  <path
    style={{ strokeWidth: 3, stroke: 'black', fill: 'transparent'}}
    d={`
      M${linkFrom * 300 + 100} 100
      V${100 + linkFrom * 25}
      H${linkTo * 300 + 75}
      V${100}
    `}
    marker-end="url(#arrow-end)"
    marker-start={isTwoWay ? 'url(#arrow-start)' : null}
    stroke-dasharray={isDotted ? '5, 5' : null}
  />
);

export default PathConnector;
