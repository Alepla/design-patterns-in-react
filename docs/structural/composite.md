# Composite

## 🧭 Definition

Compose objects into tree structures to represent part-whole hierarchies.

## 💡 Problem

You want to treat individual elements and groups of elements uniformly.

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
  </Folder>
</Folder>;
```

## 🔍 Advantages

- Simplifies handling of complex nested structures.

- Uniform interface for both simple and composite elements.

## 🚫 Disadvantages

- Can make debugging more complex.