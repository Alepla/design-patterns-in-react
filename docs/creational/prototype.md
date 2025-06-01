# Prototype

## 🧭 Definition

The Prototype pattern creates new objects by copying an existing object (the prototype).

## 💡 Problem

When object creation is expensive, and you need to create similar objects frequently.

## 📦 Example in React

Cloning component props to create similar components:

```jsx
const cloneComponent = (Component, extraProps) => (props) =>
  <Component {...props} {...extraProps} />;
```

Or duplicating data objects in state:

```jsx
const clonedData = { ...originalData };
```

## 🔍 Advantages

- Efficient object creation.

- Avoids redundant initialization.

## 🚫 Disadvantages

- Cloning can become tricky with deep objects or references.
