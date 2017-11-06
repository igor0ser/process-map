import React from 'react';

const LineConnector = ({ connector: { linkTo, linkFrom, isTwoWay, isDotted } }) => (
  <line
    x1={linkFrom * 300 + 200}
    y1="50"
    x2={linkFrom * 300 + 300}
    y2="50"
    style={{ strokeWidth: 3, stroke: 'black'}}
    key={linkTo}
    markerEnd="url(#arrow-end)"
    markerStart={isTwoWay ? 'url(#arrow-start)' : null}
    strokeDasharray={isDotted ? '5, 5' : null}
  />
);

export default LineConnector;
