# Strategy

## 🧭 Definition

Defines a family of algorithms and makes them interchangeable at runtime.

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

## 🔍 Advantages

- Reusable, swappable behaviors.

- Cleaner code than many if/else or switch statements.

## 🚫 Disadvantages

- Requires planning and additional abstraction.