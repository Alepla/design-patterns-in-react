# Factory Method

## 🧭 Definition

The Factory Method pattern defines an interface for creating objects but lets subclasses or specific conditions determine which concrete class or component to instantiate.

In React, this often translates to conditionally rendering components based on props or configuration—without hardcoding the logic in consumers.

## 💡 Problem

You need to delegate component creation without knowing in advance which exact component should be rendered, and you want to avoid tightly coupling component consumers to specific implementations.

## 📦 Example in React

A component that dynamically renders different components based on a `type` prop:

```jsx
const ButtonFactory = ({ type, ...props }) => {
  if (type === 'primary') return <PrimaryButton {...props} />;
  if (type === 'secondary') return <SecondaryButton {...props} />;
  return <DefaultButton {...props} />;
};
```

## ✅ When to Use

- You want to encapsulate logic for choosing components.

- There are multiple variants of a component that share a common interface or usage.

- You want to centralize creation logic to reduce duplication.

## 🔍 Advantages

- Decouples component creation from the component's usage.

- Easier to extend: Just add a new type and handler.

- Encourages modular, clean logic.

## 🚫 Disadvantages

- Adds indirection, which can reduce clarity in simple use cases.

- Can grow in complexity as more types are added without proper structure (consider strategy pattern or config-driven factories).