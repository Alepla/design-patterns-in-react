# Command

## 🧭 Definition

Encapsulates a request as an object, allowing parameterization of clients with queues, undo/redo, etc.

## 💡 Problem

You want to decouple the logic of triggering actions from the logic that executes them.

## 📦 Example in React

```jsx
const useCommand = () => {
  const [log, setLog] = useState([]);

  const execute = (command) => {
    command.execute();
    setLog((prev) => [...prev, command.name]);
  };

  return { execute, log };
};

const sayHello = {
  name: 'Say Hello',
  execute: () => alert('Hello'),
};

const App = () => {
  const { execute, log } = useCommand();
  return (
    <div>
      <button onClick={() => execute(sayHello)}>Run</button>
      <ul>{log.map((cmd, i) => <li key={i}>{cmd}</li>)}</ul>
    </div>
  );
};
```

## 🔍 Advantages

- Great for undo/redo implementations.

- Decouples sender from receiver.

## 🚫 Disadvantages

- Can introduce unnecessary complexity for simple actions.