# Flyweight

## 🧭 Definition

Use sharing to support large numbers of fine-grained objects efficiently.

The **Flyweight pattern** minimizes memory usage and improves performance by **sharing common data between similar components**, especially when rendering many instances.

Use memoization or shared props/styles to avoid duplicating logic and rendering unnecessarily. This pattern is especially helpful in large lists, icon toolbars, or repeated UI elements.

## 💡 Problem

You need to render many lightweight components that share common properties, like icons, buttons, or list items. Recreating them from scratch each time is wasteful.

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

## ✅ When to Use

- In UIs with many repeated visual elements (e.g., lists, icons, avatars).

- When rendering performance is affected by too many similar components.

- If you can **safely share logic or style** across instances.

## 🔍 Advantages

- **Reduces memory footprint**: Great for rendering thousands of similar items.

- **Improves performance**: Avoids unnecessary re-renders.

- **Efficient resource usage**: Especially useful in performance-critical UIs.

## 🚫 Disadvantages

- **State complexity**: If individual items need unique state, it may complicate the shared structure.

- **Debugging memoized components** can be tricky if you're not careful with prop comparison.