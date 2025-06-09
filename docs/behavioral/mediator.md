# Mediator

## 🧭 Definition

Defines an object that encapsulates how a set of objects interact, promoting loose coupling.

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

## 🔍 Advantages

- Reduces direct dependencies.

- Centralized communication.

## 🚫 Disadvantages

- Mediator itself can become complex.