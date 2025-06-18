// Strategy Pattern Example in React
// Selecting an algorithm at runtime
import React, { useState } from 'react';

const strategies = {
  upper: (str) => str.toUpperCase(),
  lower: (str) => str.toLowerCase(),
};

export const StrategyExample = () => {
  const [strategy, setStrategy] = useState('upper');
  const [text, setText] = useState('Hello');

  return (
    <div>
      <select onChange={(e) => setStrategy(e.target.value)} value={strategy}>
        <option value="upper">Uppercase</option>
        <option value="lower">Lowercase</option>
      </select>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Result: {strategies[strategy](text)}</p>
    </div>
  );
};