# Bridge

## 🧭 Definition

Decouple an abstraction from its implementation so that the two can vary independently.

## 💡 Problem

You want to separate the core logic from implementation details like UI themes or platforms.

## 📦 Example in React

```jsx
const Modal = ({ theme, content }) => <div style={theme}>{content}</div>;

const darkTheme = { backgroundColor: 'black', color: 'white' };
const lightTheme = { backgroundColor: 'white', color: 'black' };

<Modal theme={darkTheme} content={<p>Hello!</p>} />;
```

## 🔍 Advantages

- Improves flexibility in changing implementations.

- Simplifies code extension.

## 🚫 Disadvantages

- Can be overkill for simple use cases.