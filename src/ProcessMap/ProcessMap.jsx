import React from 'react';
import transformItems from './utils/transformItems';
import ItemComponent from './items'

// width would be passed through props
const ProcessMap = ({ items }) => (
  <svg width="2000" height="500">
    <defs>
      <marker id="arrow-end" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
      </marker>
      <marker id="arrow-start" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto-start-reverse" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
      </marker>
      <g id="start">
        <path d="M10,0 h180 a10,10 0 0 1 10,10 v80 a10,10 0 0 1 -10,10 h-180 a10,10 0 0 1 -10,-10 v-80 a10,10 0 0 1 10,-10 z" fill="none" stroke="black" stroke-width="3" />
      </g>
    </defs>
    {transformItems(items).map((item, index) => (
      <ItemComponent item={item} key={index} index={index} />
    ))}
  </svg>
);

export default ProcessMap;
