import React from 'react';
import Connector from '../connectors';

const Start = ({ item, index }) => (
  <g>
    <use xlinkHref="#start" transform={`translate(${index * 300})`} />
    <text x={index * 300 + 10} y="35" style={{ fontSize: "11px" }}>
      {item.title}
    </text>
    {Object.values(item.connectors).map(connector => (
      <Connector connector={connector} key={connector.linkTo} />
    ))}
  </g>
);

export default Start;
