# Template Method

## 🧭 Definition

The Template Method pattern defines the skeleton of an algorithm in a base component or function, allowing specific steps to be overridden by child components or passed-in behavior.

In React, this typically means creating reusable wrapper components where parts of the UI or logic are injected, often through props like render, children, or function callbacks.

## 💡 Problem

You want a shared base algorithm with customizable parts.

## 📦 Example in React

```jsx
const BaseCard = ({ title, renderContent }) => (
  <div>
    <h3>{title}</h3>
    <div>{renderContent()}</div>
  </div>
);

const InfoCard = () => (
  <BaseCard
    title="User Info"
    renderContent={() => <p>Name: Alex</p>}
  />
);
```

## ✅ When to Use

- You want to enforce a common structure or layout, but allow parts of it to vary.

- You need to avoid code duplication while keeping components customizable.

- You want to standardize workflows with configurable steps.

## 🔍 Advantages

- Code reuse through shared structure.

- Enforces consistent layouts or logic flows.

- Custom steps can be passed via render props or children.

## 🚫 Disadvantages

- Can feel less flexible than pure composition or hooks.

- Overuse may lead to deep nesting or unclear override points.