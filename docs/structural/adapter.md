# Adapter

## 🧭 Definition

Allows adapting one interface to another expected by the client. In React, this means wrapping components with incompatible props so they can be reused in a different context without modifying their original code.

## 💡 Problem

You want to reuse an existing component (e.g., legacy or from a third-party library), but its props don't match what your app expects. Instead of rewriting it, you adapt its interface.

## 📦 Example in React

```jsx
const LegacyButton = ({ text }) => <button>{text}</button>;

const ModernButton = ({ label }) => <LegacyButton text={label} />;

<ModernButton label="Click me" />;
```

## ✅ When to Use

- You want to integrate a third-party or legacy component without changing its code.

- Your application uses a different prop structure than the component you want to reuse.

## 🔍 Advantages

- Encourages reuse of existing components.

- Prevents rewriting or modifying external code.

- Simplifies integration of third-party libraries.

## 🚫 Disadvantages

- Adds an extra layer of abstraction.

- Overuse can lead to unnecessary complexity.