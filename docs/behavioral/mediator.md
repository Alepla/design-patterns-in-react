# Mediator

## 🧭 Definition

The Mediator pattern defines an object that centralizes communication between a set of components, promoting loose coupling by preventing components from referring to each other explicitly.

In React, this pattern is commonly implemented using context providers or state management systems that act as a hub for communication.

## 💡 Problem

You want to centralize complex communication between many components.

## 📦 Example in React

```jsx
const ChatContext = createContext();

const ChatMediator = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const sendMessage = (user, text) => setMessages([...messages, { user, text }]);

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
```

## ✅ When to Use

- You want to avoid tight coupling between components that need to collaborate.

- You have many-to-many communication (e.g. chat apps, event systems).

- You want a centralized controller for interactions and data flow.

## 🔍 Advantages

- Decouples components from each other.

- Centralized logic makes behavior easier to modify or extend.

- Encourages cleaner architecture in complex UIs.

## 🚫 Disadvantages

- The mediator can become a bottleneck or "God object" if it grows too complex.

- Can add an extra layer of indirection, making flow harder to trace in small apps.
