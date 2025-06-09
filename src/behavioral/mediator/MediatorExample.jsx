// Mediator Pattern Example in React
// Centralizing communication between components
import React, { useState } from 'react';

export const MediatorExample = () => {
  const [messages, setMessages] = useState([]);

  const notify = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <div>
      <button onClick={() => notify('Component A sent a message')}>Send</button>
      <div>{messages.map((msg, i) => <p key={i}>{msg}</p>)}</div>
    </div>
  );
};