// State Pattern Example in React
// Switching between different behaviors based on internal state
import React, { useState } from 'react';

export const StateExample = () => {
  const [mode, setMode] = useState('view');

  return (
    <div>
      <p>Mode: {mode}</p>
      <button onClick={() => setMode('edit')}>Edit</button>
      <button onClick={() => setMode('view')}>View</button>
    </div>
  );
};