# Iterator

## 🧭 Definition

The Iterator pattern provides a way to access elements of a collection sequentially, without exposing its internal structure.

In React, this often translates to controlled iteration through custom components or stateful logic—rather than relying on native array methods like .map().

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

## ✅ When to Use

- You want to display items one at a time (e.g. slides, cards, quizzes).

- You need custom iteration logic (e.g. skipping, filtering, lazy loading).

- You want to decouple iteration from the collection structure.

## 🔍 Advantages

- Encapsulates iteration logic in a reusable component.

- Useful for step-based UIs, like carousels or onboarding flows.

- Makes it easier to add control (e.g. next, previous, pause).

## 🚫 Disadvantages

- May be overkill for basic rendering tasks (.map() is often simpler).

- Adds extra state and logic to manage iteration manually.