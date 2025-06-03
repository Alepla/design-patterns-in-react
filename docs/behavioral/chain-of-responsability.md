# Chain of Responsibility

## 🧭 Definition

Allows a request to be passed along a chain of handlers. Each handler decides either to process the request or pass it to the next handler.

## 💡 Problem

You want to process user input or actions in a pipeline where each component decides whether to handle it or pass it on.

## 📦 Example in React

```jsx
const withLogging = (Component) => (props) => {
  console.log('Logging:', props);
  return <Component {...props} />;
};

const withValidation = (Component) => (props) => {
  if (!props.value) return <p>Error: Missing value</p>;
  return <Component {...props} />;
};

const Input = ({ value }) => <input defaultValue={value} />;
const EnhancedInput = withLogging(withValidation(Input));

<EnhancedInput value="Hello" />;
```

## 🔍 Advantages

- Promotes separation of concerns.

- Easy to extend by adding new handlers.

## 🚫 Disadvantages

- Handlers may become too dependent on order.

- Can be hard to debug.