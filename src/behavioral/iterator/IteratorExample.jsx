// Iterator Pattern Example in React
// Sequential access to elements without exposing structure
import React from 'react';

export const IteratorExample = () => {
  const data = ['Item 1', 'Item 2', 'Item 3'];
  const iterator = data[Symbol.iterator]();

  const items = [];
  let result = iterator.next();
  while (!result.done) {
    items.push(result.value);
    result = iterator.next();
  }

  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
};