# Command

## 🧭 Definition

The Command pattern encapsulates an action (or request) as an object. This allows you to:

- Parameterize components with commands,

- Queue or log actions,

- Support undo/redo functionality,

- Decouple the object that triggers the action from the one that performs it.



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

## ✅ When to Use

- You want to decouple the component that initiates an action from the logic that performs it.

- You need to queue, log, or undo user interactions.

- You want to store actions for later execution (e.g. macros, replay systems).

## 🔍 Advantages

- Decouples logic execution from UI components.

- Enables logging, undo/redo, and macro recording.

- Commands are reusable and composable.

## 🚫 Disadvantages

- Adds boilerplate for simple tasks.

- May lead to overengineering in small apps.

- Harder to follow flow if commands become too abstract or scattered.