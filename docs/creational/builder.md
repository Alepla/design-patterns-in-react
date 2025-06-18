# Builder

## 🧭 Definition

The Builder pattern separates the construction of a complex object from its representation, so the same building process can create different representations.

In React, this typically means using a component or hook that progressively assembles complex UI elements (like forms or layouts) from configurable pieces.

## 💡 Problem

You need to build complex UI structures step-by-step based on dynamic input (e.g., forms, wizards, settings panels), and want to keep the creation logic flexible and reusable.

## 📦 Example in React

A form builder component that dynamically adds fields:

```jsx
const FormBuilder = ({ fields }) => (
  <form>
    {fields.map((field) => (
      <input key={field.name} type={field.type} placeholder={field.label} />
    ))}
  </form>
);
```

## ✅ When to Use

- You need to dynamically build UI based on config or user input.

- The structure has many optional or conditional parts.

- You want to decouple the logic of construction from its rendering.

- You want to make form generation or layout creation reusable and modular.

## 🔍 Advantages

- Builds complex structures in a controlled, step-by-step way.

- Supports dynamic configuration.

- Promotes code reuse and maintainability.

- Separates what is built from how it’s built.

## 🚫 Disadvantages

- Adds overhead for simple or static components.

- Can lead to overengineering if not needed.

- More complex debugging when the builder logic is highly abstracted.