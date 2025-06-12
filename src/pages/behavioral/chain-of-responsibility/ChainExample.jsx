// Chain of Responsibility Example in React
// Handling a request through a chain of functions
import React from 'react';

export const ChainExample = () => {
  const handle = (type) => {
    if (type === 'A') return 'Handled by A';
    if (type === 'B') return 'Handled by B';
    return 'Not handled';
  };

  return <div>Chain Result: {handle('A')}</div>;
};