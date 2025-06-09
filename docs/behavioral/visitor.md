# Visitor

## 🧭 Definition

Lets you define new operations on objects without changing their classes.

## 💡 Problem

You want to perform many unrelated operations across a group of objects.

## 📦 Example in React

```jsx
const renderVisitor = (element) => {
  switch (element.type) {
    case 'text': return <p>{element.value}</p>;
    case 'image': return <img src={element.value} alt="" />;
    default: return null;
  }
};

const Document = ({ elements }) => <>{elements.map(renderVisitor)}</>;
```

## 🔍 Advantages

- Clean separation of logic.

- Easily extendable without touching object structure.

## 🚫 Disadvantages

- Breaks encapsulation if not carefully managed.