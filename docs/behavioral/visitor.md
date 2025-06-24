# Visitor

## 🧭 Definition

The Visitor pattern lets you define new operations on a group of objects without changing their structure. Instead of modifying the object classes themselves, you externalize the behavior into a visitor function or object.

In React, this often shows up when rendering or transforming different kinds of elements based on their "type".

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

## ✅ When to Use

You have a collection of heterogeneous elements (e.g., blocks in a document, nodes in a tree).

You want to perform multiple different operations on them (rendering, validation, export, etc.).

You don’t want to modify the element structure every time you add a new operation.

## 🔍 Advantages

- Clean separation between data and operations.

- Easy to extend with new operations (e.g., render, export, validate) without touching the element data.

- Encourages open/closed principle: open for extension, closed for modification.

## 🚫 Disadvantages

- Can break encapsulation if operations need internal details.

- Requires keeping operation logic synchronized with structure types.

- Becomes harder to manage if element types grow too much.