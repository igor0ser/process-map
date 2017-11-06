import React from 'react';
import ProcessSimple from './ProcessSimple';
import Start from './Start';

const ItemComponents = { Start, ProcessSimple };

const isValid = type => Object.keys(ItemComponents).includes(type);

export default ({ item, index }) => {
  if (!isValid(item.type)) {
    return <ProcessSimple item={item} index={index}/>
  }

  const ItemComponent = ItemComponents[item.type];
  return <ItemComponent item={item} index={index}/>;
};