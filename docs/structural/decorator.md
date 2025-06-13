# Decorator

## 🧭 Definition

Attach additional responsibilities to an object dynamically.

In React, this means enhancing a component’s behavior by wrapping it with reusable logic, without modifying the component itself.

The Decorator pattern in React is typically implemented using Higher-Order Components (HOCs) or wrapper components. These are functions that take a component and return an enhanced version of it.

## 💡 Problem

You want to extend or modify a component’s behavior without:

- changing its source code,

- creating multiple variations,

- or duplicating logic across usages.

## 📦 Example in React

```jsx
const withBorder = (Component) => (props) => (
  <div style={{ border: '1px solid red' }}>
    <Component {...props} />
  </div>
);

const Button = ({ label }) => <button>{label}</button>;
const BorderedButton = withBorder(Button);

<BorderedButton label="Click" />;
```

## ✅ When to Use

- You want to add features like logging, styling, or behavior conditionally without touching the core component.

- You have cross-cutting concerns (e.g., analytics, error boundaries, theming) shared by many components.

- You prefer a functional approach using composition over inheritance.

- You want enhancements to be easily removed or swapped without touching the underlying component code.

## 🔍 Advantages

- **Composable**: You can chain multiple decorators for combined effects.

- **Reusable**: Write enhancements once and reuse them across your app.

- **Separation of concerns**: Keeps core component logic clean and focused.

## 🚫 Disadvantages

- Decorator nesting can make the component tree hard to trace.

- Harder to debug when many HOCs are layered.

- In some cases, hooks or context may be simpler and more readable.