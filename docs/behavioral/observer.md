# Observer

## 🧭 Definition

Defines a one-to-many dependency where changes to one object notify all dependents.

## 💡 Problem

You want components to react to data changes without manual re-syncing.

## 📦 Example in React

```jsx
const useObserver = (observable) => {
  const [state, setState] = useState(observable.get());
  useEffect(() => observable.subscribe(setState), [observable]);
  return state;
};

// Using Zustand or custom observer object would be a fit here.
```

## 🔍 Advantages

- Decoupled, reactive architecture.

- Great for event-driven systems.

## 🚫 Disadvantages

- Can introduce hidden dependencies.