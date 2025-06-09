# Template Method

## 🧭 Definition

Defines the skeleton of an algorithm in a method, deferring some steps to subclasses.

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

## 🔍 Advantages

- Shared algorithm structure.

- High reusability.

## 🚫 Disadvantages

- Less flexible than composition.