# Adapter

## 🧭 Definition

Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

## 💡 Problem

You want to reuse existing components that don’t match the expected props or interface in a new context.

## 📦 Example in React

```jsx
const LegacyButton = ({ text }) => <button>{text}</button>;

const ModernButton = ({ label }) => <LegacyButton text={label} />;

<ModernButton label="Click me" />;
```

## 🔍 Advantages

- Promotes reuse of existing components.

- Prevents rewriting legacy code.

## 🚫 Disadvantages

- May introduce extra layers of abstraction.