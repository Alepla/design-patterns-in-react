# Memento

## 🧭 Definition

Captures and externalizes an object's internal state so it can be restored later.

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

## 🔍 Advantages

- Easy undo/redo support.

- State tracking made simple.

## 🚫 Disadvantages

- Memory intensive if misused.