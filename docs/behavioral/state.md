# State

## 🧭 Definition

Allows an object to alter its behavior when its internal state changes.

## 💡 Problem

You want components to act differently based on internal modes.

## 📦 Example in React

```jsx
const TrafficLight = () => {
  const [state, setState] = useState('green');

  const next = () => {
    setState((prev) =>
      prev === 'green' ? 'yellow' : prev === 'yellow' ? 'red' : 'green'
    );
  };

  return (
    <div>
      <p>{state.toUpperCase()}</p>
      <button onClick={next}>Next</button>
    </div>
  );
};
```

## 🔍 Advantages

- Clean modeling of mode-dependent behavior.

- Makes transitions explicit.

## 🚫 Disadvantages

- Can lead to excessive state logic.