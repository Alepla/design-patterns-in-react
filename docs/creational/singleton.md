# Singleton

## 🧭 Definition

The Singleton pattern ensures a class has only one instance and provides a global access point to it.

## 💡 Problem

When you need exactly one instance of a class shared across your app.

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

## 🔍 Advantages

- Centralized access to a single instance.

- Global state management (like in React Context).

## 🚫 Disadvantages

- Can lead to hidden dependencies and tight coupling.