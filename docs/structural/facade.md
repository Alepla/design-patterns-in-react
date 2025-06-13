# Facade

## 🧭 Definition

Provide a simplified interface to a complex subsystem.

In React, the Facade pattern is often used to encapsulate multiple hooks, contexts, or logic layers behind a single function or component, making it easier for others to use.

## 💡 Problem

You have a system with multiple sources of logic—like authentication, user preferences, shopping cart state, etc.—and want to avoid forcing components to deal with that complexity directly.

## 📦 Example in React

```jsx
const useAuth = () => {
  return { user: { name: 'Alice' }, login: () => {}, logout: () => {} };
};

const useCart = () => {
  return { items: [/* cart items */], addItem: () => {}, removeItem: () => {} };
};

const useAppContext = () => {
  const auth = useAuth();
  const cart = useCart();
  return { auth, cart };
};

const Component = () => {
  const { auth, cart } = useAppContext();

  return (
    <div>
      <p>👤 User: {auth.user.name}</p>
      <p>🛒 Items in Cart: {cart.items.length}</p>
    </div>
  );
};
```

## ✅ When to Use

- In apps with multiple business logic hooks or context providers.

- When you want to keep component code focused on rendering, not logic management.

- When centralizing access to shared state improves consistency and reuse.

## 🔍 Advantages

- **Simplified usage**: Components only deal with one hook or function.

- **Decoupled logic**: Internals like useAuth or useCart can change without affecting consuming components.

- **Improved readability**: Code stays clean and declarative.


## 🚫 Disadvantages

- Hidden complexity: Developers might not realize what's going on under the hood.

- Overuse risk: Over-abstracting can make debugging and testing harder if internals are too opaque.
