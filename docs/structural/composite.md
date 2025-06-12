# Composite

## 🧭 Definition

Compose objects into tree structures to represent part-whole hierarchies.

In other words: **let single items and groups of items be treated the same way**, especially when working with nested or hierarchical data.

## 💡 Problem

You’re building something where items can either be:

- individual (like a file), **or**

- a group of items (like a folder).

You want to **handle them the same way**, so your rendering logic doesn’t need to care whether it’s a single node or a tree of nodes.

This is common in:

- File systems

- Menus and dropdowns

- Comments and replies

- Organization charts

UI component trees

## 📦 Example in React

```jsx
const Folder = ({ name, children }) => (
  <div>
    <strong>{name}</strong>
    <div style={{ paddingLeft: 16 }}>{children}</div>
  </div>
);

<Folder name="src">
  <Folder name="components">
    <Folder name="Button.js" />
    <Folder name="Input.js" />
  </Folder>
  <Folder name="utils">
    <Folder name="helpers.js" />
  </Folder>
</Folder>
```

## ✅ When to Use

- When dealing with recursive or nested data.

- When you want to render arbitrarily deep trees (files, comments, etc.).

- When you want a clean and unified API for both single and grouped items.

## 🔍 Advantages

- Makes it easy to work with complex nested hierarchies.

- You can use the same component for all levels of the tree.

- Encourages reusable, recursive UI logic.

## 🚫 Disadvantages

- Recursive components can be harder to debug.

- State management across deep trees can get tricky without proper patterns (e.g., context or reducers).

- May result in performance overhead for deeply nested trees.