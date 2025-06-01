# Abstract Factory

## 🧭 Definition

The Abstract Factory pattern provides an interface for creating families of related objects without specifying their concrete classes.

## 💡 Problem

When your system needs to work with multiple families of related objects.

## 📦 Example in React

Imagine a `ThemeFactory` for creating styled components based on a theme:

```jsx
const lightThemeFactory = {
  Button: (props) => <button className="light-btn" {...props} />,
  Card: (props) => <div className="light-card" {...props} />,
};

const darkThemeFactory = {
  Button: (props) => <button className="dark-btn" {...props} />,
  Card: (props) => <div className="dark-card" {...props} />,
};
```

## 🔍 Advantages

- Ensures consistency across related components.

- Centralizes creation logic.

## 🚫 Disadvantages

- Can become complex with many variations.