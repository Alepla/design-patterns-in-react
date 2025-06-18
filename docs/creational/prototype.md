# Prototype

## 🧭 Definition

The Prototype pattern creates new objects by copying (or "cloning") an existing object, known as the prototype. This allows for object creation without relying on constructors.

In React, this pattern is often used to clone components or state objects to reuse structure or behavior efficiently.

## 💡 Problem

You need to create many similar objects or components without reinitializing them from scratch—especially when creation is expensive or repetitive.

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

## ✅ When to Use

- You need to create multiple similar objects or components.

- Object creation is expensive or requires a specific configuration.

- You want to preserve the shape of an object while adjusting small parts.

## 🔍 Advantages

- Fast duplication of existing structures.

- Reduces the need for repetitive object creation logic.

- Can be combined with factories or builders for powerful reuse patterns.

## 🚫 Disadvantages

- Deep cloning is tricky—may require utilities like structuredClone() or external libraries.

- May inadvertently copy unwanted references or stale data.

- Can obscure where data or props originated.
