import React from 'react';
import Connector from '../connectors';

const ProcessSimple = ({ item, index }) => (
  <g>
    <rect
      x={index * 300}
      width="200"
      height="100"
      style={{ strokeWidth: 3, stroke: 'black', fill: 'transparent' }}
      onMouseEnter={() => console.log(item)}
    />
    <text x={index * 300 + 10} y="35" style={{ fontSize: "11px"}}>
      {item.title}
    </text>
    {Object.values(item.connectors).map(connector => (
      <Connector connector={connector} key={connector.linkTo} />
    ))}
  </g>
);

export default ProcessSimple;
