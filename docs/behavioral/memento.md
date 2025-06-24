# Memento

## 🧭 Definition

The Memento pattern captures and stores an object’s internal state so that it can be restored later — without violating encapsulation.

In React, this pattern is especially useful for implementing undo/redo, time travel debugging, or restoring previous UI states.

## 💡 Problem

You want to implement undo/redo or store previous states.

## 📦 Example in React

```jsx
const useMemento = (initial) => {
  const [history, setHistory] = useState([initial]);
  const [index, setIndex] = useState(0);

  const set = (val) => {
    const newHistory = [...history.slice(0, index + 1), val];
    setHistory(newHistory);
    setIndex(newHistory.length - 1);
  };

  const undo = () => index > 0 && setIndex(index - 1);
  const redo = () => index < history.length - 1 && setIndex(index + 1);

  return { state: history[index], set, undo, redo };
};
```

## ✅ When to Use

- You want to implement undo/redo features.

- You need to track changes over time.

- You want to restore previous states (e.g., form drafts, drawing tools).

## 🔍 Advantages

- Enables undo/redo and time travel behavior.

- Keeps past states isolated and restorable.

- Useful for debugging or versioning state.

## 🚫 Disadvantages

- Memory intensive if state snapshots are large or too frequent.

- Can grow complex if you add branching histories or timestamps.