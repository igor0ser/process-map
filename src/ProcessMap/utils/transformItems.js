import { camelCase, capitalize } from 'lodash';

const transformItems = items =>
  Object.values(items).map((item, itemIndex) => ({
    ...item,
    type: capitalize(camelCase(item.type)),
    connectors: Object.values(item.connectors).map(connector => ({
      ...connector,
      linkTo: connector.linkTo - 1,
      linkFrom: itemIndex,
      isTwoWay: connector.type.includes('two-way'),
      isDotted: connector.type.includes('dotted')
    }))
  }));

export default transformItems;