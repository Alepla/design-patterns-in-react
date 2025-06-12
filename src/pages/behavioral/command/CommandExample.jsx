// Command Pattern Example in React
// Encapsulating a request as an object
import React, { useState } from 'react';

export const CommandExample = () => {
  const [history, setHistory] = useState([]);

  const executeCommand = (command) => {
    command.execute();
    setHistory((prev) => [...prev, command.name]);
  };

  const logCommand = {
    name: 'Log Command',
    execute: () => console.log('Executing command'),
  };

  return (
    <div>
      <button onClick={() => executeCommand(logCommand)}>Run Command</button>
      <p>History: {history.join(', ')}</p>
    </div>
  );
};