# State

## 🧭 Definition

The State pattern allows an object to change its behavior when its internal state changes. It appears as if the object has changed its class.

In React, this pattern is commonly implemented using useState or useReducer, allowing components to change their behavior based on current mode, phase, or status.

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

## ✅ When to Use

- You have mode-driven UIs (e.g., tabs, toggles, workflows).

- Different states require different logic or UI.

- You want to make state transitions explicit and manageable.

## 🔍 Advantages

- Encapsulates mode-specific behavior.

- Makes UI more predictable by managing transitions clearly.

- Improves readability when compared to deeply nested conditionals.

## 🚫 Disadvantages

- Can become complex if too many states or transitions are hard-coded.

- Difficult to scale without a state machine or reducer abstraction.

- Risk of scattered logic if state-specific behavior isn't well organized.