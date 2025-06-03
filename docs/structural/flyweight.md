# Flyweight

## 🧭 Definition

Use sharing to support large numbers of fine-grained objects efficiently.

## 💡 Problem

You want to minimize memory usage when rendering many similar components.

## 📦 Example in React

```jsx
const Icon = React.memo(({ name }) => <i className={`icon-${name}`} />);

const Toolbar = () => (
  <div>
    <Icon name="save" />
    <Icon name="delete" />
    <Icon name="edit" />
  </div>
);
```

## 🔍 Advantages

- Saves memory and improves performance.

- Avoids redundant rendering.

## 🚫 Disadvantages

- Can introduce complexity in state handling.