# Factory Method

## 🧭 Definition

The Factory Method defines an interface for creating objects, but lets subclasses decide which class to instantiate.

## 💡 Problem

When you need to delegate the creation of objects without specifying their concrete classes.

## 📦 Example in React

A component that dynamically renders different components based on a `type` prop:

```jsx
const ButtonFactory = ({ type, ...props }) => {
  if (type === 'primary') return <PrimaryButton {...props} />;
  if (type === 'secondary') return <SecondaryButton {...props} />;
  return <DefaultButton {...props} />;
};
```

## 🔍 Advantages

- Promotes flexibility by decoupling object creation.

- Easier to extend or modify creation logic.

## 🚫 Disadvantages

- Can increase code complexity.