# Decorator

## 🧭 Definition

Attach additional responsibilities to an object dynamically.

## 💡 Problem

You want to enhance a component’s behavior without modifying its original code.

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

## 🔍 Advantages

- Composable enhancements.

- Reusable logic wrappers.

## 🚫 Disadvantages

- Nested decorators can be hard to follow.