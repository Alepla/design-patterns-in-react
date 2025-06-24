# Observer

## 🧭 Definition

The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

In React, this pattern is commonly used with state management libraries like Zustand, MobX, or even custom event emitters, allowing components to react to shared state changes.

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

## ✅ When to Use

- You want multiple components to react to changes in shared or external state.

- You're building real-time, event-driven, or collaborative UIs.

- You want to decouple data sources from UI components.

## 🔍 Advantages

- Decouples data and UI — components don’t need to know where state comes from.

- Enables real-time updates in a clean way.

- Scales well in event-driven or pub/sub architectures.

## 🚫 Disadvantages

- Hidden dependencies between observer and observable can make debugging harder.

- If mismanaged, can lead to memory leaks (e.g. unsubscribed observers).

- Can be overkill for small, localized state.