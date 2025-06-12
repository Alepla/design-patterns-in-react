// Memento Pattern Example in React
// Saving and restoring component state history
import React, { useState } from 'react';

export const MementoExample = () => {
  const [text, setText] = useState('');
  const [history, setHistory] = useState([]);

  const save = () => setHistory([...history, text]);
  const restore = () => setText(history[history.length - 1] || '');

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={save}>Save</button>
      <button onClick={restore}>Undo</button>
      <p>Current: {text}</p>
    </div>
  );
};