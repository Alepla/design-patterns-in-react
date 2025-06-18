# Abstract Factory

## 🧭 Definition

The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. It ensures that related components are created in a consistent and interchangeable way.

## 💡 Problem

You need to build components that belong to a family (e.g., UI components for light vs. dark themes), and you want to switch entire sets of related components without changing their usage across your app.

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

## ✅ When to Use

- You want to maintain consistent theming or styling across sets of components.

- You have multiple variants of UI components that share structure but differ in implementation.

- You want to decouple component usage from the logic that decides how they're built.

- You anticipate adding new "families" (e.g., themes, platforms, styles) in the future.

## 🔍 Advantages

- Ensures consistency among related components.

- Centralizes logic for creating variations.

- Makes it easy to switch between configurations (e.g., theme, platform).

- Promotes separation of concerns between component usage and creation.

## 🚫 Disadvantages

- Can become hard to manage as the number of variations grows.

- Adds indirection, which may be overkill for small-scale projects.

- More abstract than necessary if only one variant is ever used.