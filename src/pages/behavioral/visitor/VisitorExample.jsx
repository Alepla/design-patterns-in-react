// Visitor Pattern Example in React
// Separating operations from object structure
import React from 'react';

export const VisitorExample = () => {
  const nodes = [
    { type: 'text', content: 'Hello' },
    { type: 'emoji', content: '👋' },
  ];

  const visit = (node) => {
    switch (node.type) {
      case 'text':
        return <p>{node.content}</p>;
      case 'emoji':
        return <span>{node.content}</span>;
      default:
        return null;
    }
  };

  return <div>{nodes.map((n, i) => <div key={i}>{visit(n)}</div>)}</div>;
};