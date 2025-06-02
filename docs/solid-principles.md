# SOLID Principles in Software Design

The SOLID principles are five design principles for writing maintainable, scalable, and testable code.  
These principles were introduced by Robert C. Martin (Uncle Bob) and are a foundation for understanding object-oriented design and design patterns.

---

## Principles

### 1️⃣ Single Responsibility Principle (SRP)

> A class or module should have **one, and only one, reason to change**.

**React Example:**

### ❌ Bad Example (violates SRP)

```jsx
// Component does too much: UI + logic + data fetching
const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/user/${userId}`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);

  return user ? <h1>{user.name}</h1> : <p>Loading...</p>;
};
```

### ✅ Good Example (SRP applied)

```jsx
// Separation of concerns: UI vs logic
const UserProfile = ({ user }) => <h1>{user.name}</h1>;

const useUser = (userId) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`/api/user/${userId}`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);
  return user;
};

// In App.js
const user = useUser(1);
return <UserProfile user={user} />;
```

### 2️⃣ Open/Closed Principle (OCP)

> Software entities should be open for extension, but closed for modification.

**React Example:**

### ❌ Bad Example (violates OCP)

```jsx
const Button = ({ label }) => <button>{label}</button>;

// Need to change original code for each new style
// Now we add 'color' to the component (modifying it)
const Button = ({ label, color }) => <button style={{ color }}>{label}</button>;
```

### ✅ Good Example (OCP applied)

```jsx
// Base Button component (closed for modification)
const Button = ({ label, onClick, style }) => (
  <button onClick={onClick} style={style}>{label}</button>
);

// Extend behavior with composition (open for extension)
const PrimaryButton = (props) => (
  <Button {...props} style={{ color: 'white', backgroundColor: 'blue' }} />
);

const SecondaryButton = (props) => (
  <Button {...props} style={{ color: 'black', backgroundColor: 'grey' }} />
);
```

### 3️⃣ Liskov Substitution Principle (LSP)

> In React, the Liskov Substitution Principle means that if you replace a **base component** with a **derived/extended component**, the behavior should remain consistent without introducing unexpected restrictions or side effects.
In other words: **a child component should be usable wherever a parent component is expected** without breaking the code.

**React Example:**

### ❌ Bad Example (violates LSP)

Here, the `PasswordInput` adds an unexpected restriction (`maxLength`) that breaks the expectations of a `TextInput`:
```jsx
const TextInput = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

const PasswordInput = ({ value, onChange }) => (
  <input type="password" value={value} onChange={onChange} maxLength={8} />
);

// If you expect to use PasswordInput like a TextInput:
<TextInput value="longpassword" onChange={handleChange} />
// Now you can't type more than 8 characters - unexpected behavior!
```
By adding `maxLength` in `PasswordInput`, we break the substitution:
Users expect a `TextInput` behavior, but get a restricted input instead.

### ✅ Good Example (LSP applied)

Refactor the components to ensure that substitution is safe:
```jsx
const TextInput = ({ value, onChange, ...props }) => (
  <input type="text" value={value} onChange={onChange} {...props} />
);

const PasswordInput = (props) => (
  <TextInput {...props} type="password" />
);

// Usage
<TextInput value="longpassword" onChange={handleChange} />
<PasswordInput value="longpassword" onChange={handleChange} />
```
✅ `PasswordInput` can safely replace `TextInput` without introducing unexpected behavior.
✅ Follows **LSP**: Subclasses (or component variants) should respect the contract of the base class (or component).

### 4️⃣ Interface Segregation Principle (ISP)

> Clients should not be forced to depend on interfaces they don't use.

**React Example:**

### ❌ Bad Example (violates ISP)

```jsx
const UserComponent = ({ name, age, onLogin, onLogout, onDelete }) => (
  <div>{name}</div>
);
```

Too many unrelated props mixed together.

### ✅ Good Example (ISP applied)

```jsx
// Separate concerns into smaller components
const UserProfile = ({ name, age }) => <div>{name}</div>;

const UserActions = ({ onLogin, onLogout }) => (
  <>
    <button onClick={onLogin}>Login</button>
    <button onClick={onLogout}>Logout</button>
  </>
);
```

### 5️⃣ Dependency Inversion Principle (DIP)

> High-level modules should not depend on low-level modules. Both should depend on abstractions.

**React Example:**

### ❌ Bad Example (violates DIP)

```jsx
// High-level component directly uses a low-level API
const App = () => {
  const theme = 'dark'; // hard-coded dependency
  return <Page theme={theme} />;
};
```

### ✅ Good Example (DIP applied)

```jsx
// Using abstraction (React Context)
const ThemeContext = React.createContext('light');

const App = () => (
  <ThemeContext.Provider value="dark">
    <Page />
  </ThemeContext.Provider>
);

const Page = () => {
  const theme = React.useContext(ThemeContext);
  return <div className={`page ${theme}`}>Hello</div>;
};
```

## References

- Clean Architecture, Robert C. Martin

- Dive Into Design Patterns, Alexander Shvets