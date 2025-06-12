# Bridge

## 🧭 Definition

Decouple an abstraction from its implementation so that the two can vary independently.

In simpler terms: **split your logic into two separate layers**—the *what* (abstraction) and the *how* (implementation)—so you can change either without affecting the other.

## 💡 Problem

You want to build components that can support multiple implementations (e.g., different themes, platforms, or rendering strategies) without duplicating logic.

In React, this often shows up when:

- You want a component to be themed (dark/light, etc.).

- You want to support different rendering engines (e.g., native vs web).

- You want to swap styling or data fetching strategies without changing component logic.

## 📦 Example in React

```jsx
const Card = ({ theme, children }) => (
  <div style={{ padding: '1rem', borderRadius: '8px', ...theme }}>
    {children}
  </div>
);

const darkTheme = { backgroundColor: '#222', color: 'white' };
const lightTheme = { backgroundColor: '#fff', color: 'black' };

<Card theme={darkTheme}>
  <h2>Dark Themed Card</h2>
  <p>This uses the dark implementation.</p>
</Card>
```

## ✅ When to Use

- When components need to support multiple, swappable implementations (like theming or platforms).

- When you want to reduce duplication of logic across variations.

## 🔍 Advantages

- Greatly improves flexibility.

- Encourages clean separation of concerns.

- Easy to extend with new "implementations" (e.g., new themes, styles).

## 🚫 Disadvantages

- Can add complexity for simple components.

- Requires more upfront planning (designing a proper interface between abstraction and implementation).