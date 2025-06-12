// Observer Pattern Example in React
// Reacting to state changes over time
import React, { useState, useEffect } from 'react';

export const ObserverExample = () => {
  const [data, setData] = useState('Initial');

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => prev + ' 🔁');
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <div>{data}</div>;
};