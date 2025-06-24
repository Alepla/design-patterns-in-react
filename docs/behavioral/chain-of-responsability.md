# Chain of Responsibility

## 🧭 Definition

The Chain of Responsibility pattern lets you pass a request along a chain of potential handlers. Each handler decides whether to handle the request or delegate it to the next one in the chain.

In React, this is often implemented by composing Higher-Order Components (HOCs) or middleware-like functions, where each layer can choose to act on the props or event—or let it pass through.

## 💡 Problem

You want to process user input or actions in a pipeline where each component decides whether to handle it or pass it on.

## 📦 Example in React

```jsx
const withLogging = (Component) => (props) => {
  console.log('Logging:', props);
  return <Component {...props} />;
};

const withValidation = (Component) => (props) => {
  if (!props.value) return <p>Error: Missing value</p>;
  return <Component {...props} />;
};

const Input = ({ value }) => <input defaultValue={value} />;
const EnhancedInput = withLogging(withValidation(Input));

<EnhancedInput value="Hello" />;
```

## ✅ When to Use

- You want to decouple request handling logic from the sender.

- You want to apply multiple behaviors (e.g., logging, validation, authorization) in a flexible and ordered pipeline.

- You want to modify or short-circuit processing depending on conditions.

## 🔍 Advantages

- Separation of concerns: Each responsibility (validation, logging, etc.) lives in its own function.

- Flexible and extendable: Handlers can be added or removed independently.

- Order control: Behaviors are executed in the order they’re composed.

## 🚫 Disadvantages

- Order-sensitive: A different order of handlers can break functionality.

- Debugging complexity: Tracing behavior across multiple handlers may become difficult.

- Reduced readability: Deep chains of HOCs can make it harder to understand the final component.