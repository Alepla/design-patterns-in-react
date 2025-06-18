# Singleton

## 🧭 Definition

The Singleton pattern ensures that a class or service has only one instance throughout the application and provides a global access point to it.

In React, this often takes the form of a context provider or a shared module that holds state or logic accessible across components.

## 💡 Problem

You need to share state or functionality (like theme, auth, or configuration) globally without recreating or duplicating it across components.

## 📦 Example in React

Using the Context API as a singleton state provider:

```jsx
const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

## ✅ When to Use

- You want only one instance of a service or state (e.g., theme, auth, locale).

- You need to share state globally across unrelated components.

- You want to avoid prop drilling and centralize control.

## 🔍 Advantages

- Guarantees a single source of truth.

- Promotes centralized, accessible state.

- Simplifies coordination between different parts of the app.

## 🚫 Disadvantages

- Can introduce hidden dependencies.

- Makes components tightly coupled to global context.

- Harder to test in isolation or override in specific scopes.