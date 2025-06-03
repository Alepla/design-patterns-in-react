# Facade

## 🧭 Definition

Provide a simplified interface to a complex subsystem.

## 💡 Problem

You have a complicated system of logic/hooks and want to expose a clean API to components.

## 📦 Example in React

```jsx
const useAuth = () => { /* logic */ };
const useCart = () => { /* logic */ };

const useAppContext = () => {
  const auth = useAuth();
  const cart = useCart();
  return { auth, cart };
};

const Component = () => {
  const { auth, cart } = useAppContext();
  return <div>{auth.user.name}</div>;
};
```

## 🔍 Advantages

- Simplifies interaction with complex logic.

- Improves readability and maintainability.

## 🚫 Disadvantages

- Hides potentially important implementation details.