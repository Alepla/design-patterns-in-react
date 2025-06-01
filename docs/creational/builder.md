# Builder

## 🧭 Definition

The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

## 💡 Problem

When you need to construct complex objects step-by-step.

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

## 🔍 Advantages

- Builds complex structures in a controlled way.

- Clear separation between construction and representation.

## 🚫 Disadvantages

- Can add complexity for simple objects.