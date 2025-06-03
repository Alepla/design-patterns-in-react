# Iterator

## 🧭 Definition

Provides a way to access elements of a collection sequentially without exposing its underlying structure.

## 💡 Problem

You want to display a list of items one at a time or in chunks, without depending on array structure.

## 📦 Example in React

```jsx
const ItemIterator = ({ items }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div>
      <p>{items[index]}</p>
      <button onClick={next}>Next</button>
    </div>
  );
};

<ItemIterator items={["One", "Two", "Three"]} />
```

## 🔍 Advantages

- Encapsulates iteration logic.

- Cleaner access to collection items.

## 🚫 Disadvantages

- Not very useful for simple lists already iterable via .map().