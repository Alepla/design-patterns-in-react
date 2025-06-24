# Strategy

## 🧭 Definition

The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. The client code can choose which strategy to use at runtime.

In React, this is useful for dynamically swapping logic (e.g., formatting, filtering, rendering) without cluttering your components with conditional logic.

## 💡 Problem

You want to swap out logic (e.g., sorting, formatting) dynamically.

## 📦 Example in React

```jsx
const formatters = {
  upper: (s) => s.toUpperCase(),
  lower: (s) => s.toLowerCase(),
};

const Formatter = ({ strategy, text }) => <p>{formatters[strategy](text)}</p>;

<Formatter strategy="upper" text="hello" />
```

## ✅ When to Use

- You need to switch between multiple implementations of a function or behavior.

- You want to clean up complex conditionals (if/else or switch) based on props or state.

- You want to decouple logic from components for better testing and reuse.

## 🔍 Advantages

- Swappable logic at runtime without code duplication.

- Encourages separation of concerns.

- Simplifies testing and extension of behaviors.

## 🚫 Disadvantages

- Requires a well-structured abstraction layer.

- Can feel like overengineering for very simple logic.

- Debugging runtime strategy errors (e.g., missing keys) can be tricky.