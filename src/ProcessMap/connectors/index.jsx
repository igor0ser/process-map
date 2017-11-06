import React from 'react';
import LineConnector from './LineConnector';
import PathConnector from './PathConnector';

export default ({ connector }) => (
  connector.linkTo === connector.linkFrom + 1 ? (
    <LineConnector connector={connector} />
  ) : (
    <PathConnector connector={connector} />
  )
);
