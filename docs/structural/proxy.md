# Proxy

## 🧭 Definition

Provide a surrogate or placeholder for another object to control access to it.

## 💡 Problem

You need to control access to a component (e.g., authentication, permissions).

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

## 🔍 Advantages

- Adds control over access and behavior.

- Enables logging, caching, and permissions.

## 🚫 Disadvantages

- Can introduce indirection and debugging complexity.