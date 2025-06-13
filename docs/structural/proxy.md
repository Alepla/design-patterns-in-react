# Proxy

## 🧭 Definition

Provide a surrogate or placeholder for another object to control access to it.

In React, a **Proxy** component wraps another component to manage or restrict access to it—commonly used for things like **authentication**, **authorization**, **logging**, or **lazy loading**.

You create a **Higher-Order Component (HOC)** or wrapper that adds logic **before rendering** the actual component. This can be used to:

- Check user permissions

- Add logging/caching

- Delay or defer loading

## 💡 Problem

You want to **protect or modify** access to a component without changing its original code. For example, only authenticated users should see certain pages or components.

## 📦 Example in React

```jsx
const withAuth = (Component) => (props) => {
  const { user } = useAuth();
  if (!user) return <p>Access denied</p>;
  return <Component {...props} />;
};

const Dashboard = () => <h1>Private Data</h1>;
const ProtectedDashboard = withAuth(Dashboard);

<ProtectedDashboard />;
```

## ✅ When to Use

- In protected routes (e.g., /dashboard)

- For conditionally rendering components based on user roles or data

- To wrap components with logging, metrics, or error boundaries

## 🔍 Advantages

- **Separation of concerns**: Access control is outside the component.

- **Security layer**: Prevents unauthorized use of components.

- **Reusability**: The same proxy can wrap multiple components.

## 🚫 Disadvantages

- **Indirection**: Extra layer makes debugging a bit harder.

- **Testing complexity**: Might require mocks/stubs for access checks.