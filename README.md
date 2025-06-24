# React Design Patterns - Modern, Advanced & Classic

![MIT License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react)
![Patterns](https://img.shields.io/badge/Design%20Patterns-23%20Total-blueviolet)
![Tests](https://img.shields.io/badge/Tests-Coming%20Soon-yellow)

This project is a personal study focused on learning and applying **Design Patterns** in modern **React (v18/19)** projects. It draws insights from both classic design patterns (based on *Dive Into Design Patterns* by Alexander Shvets) and advanced, idiomatic React patterns (inspired by *Advanced React* by Nadya Makarevich).

You'll find practical code examples and Markdown documentation to guide your exploration.


## 📚 Contents

### 🧱 SOLID Principles

- [SOLID Principles](./docs/solid-principles.md)

### 🧩 Design Patterns

---

#### 💡 Advanced React Patterns
Dive into patterns specifically tailored for building robust, performant, and maintainable React applications.

- [Children as Props](./docs/advanced/children-as-props.md)

---

#### 🔨 Creational Patterns
Focus on object creation mechanisms, designed to improve flexibility and reusability in your React components and logic.

- [Factory Method](./docs/creational/factory-method.md)
- [Abstract Factory](./docs/creational/abstract-factory.md)
- [Builder](./docs/creational/builder.md)
- [Prototype](./docs/creational/prototype.md)
- [Singleton](./docs/creational/singleton.md)

---

#### 🏗️ Structural Patterns
Concerned with how classes and objects are composed to form larger structures, promoting robust and adaptable designs.

- [Adapter](./docs/structural/adapter.md)
- [Bridge](./docs/structural/bridge.md)
- [Composite](./docs/structural/composite.md)
- [Decorator](./docs/structural/decorator.md)
- [Facade](./docs/structural/facade.md)
- [Flyweight](./docs/structural/flyweight.md)
- [Proxy](./docs/structural/proxy.md)

---

#### 🔄 Behavioral Patterns
Deal with algorithms and the assignment of responsibilities between objects, improving flexibility in communication.

- [Chain of Responsibility (Classic)](./docs/behavioral/chain-of-responsability.md)
- [Command](./docs/behavioral/command.md)
- [Iterator](./docs/behavioral/iterator.md)
- [Mediator](./docs/behavioral/mediator.md)
- [Memento](./docs/behavioral/memento.md)
- [Observer](./docs/behavioral/observer.md)
- [State](./docs/behavioral/state.md)
- [Strategy](./docs/behavioral/strategy.md)
- [Template Method](./docs/behavioral/template-method.md)
- [Visitor](./docs/behavioral/visitor.md)

## 👣 Learning Path

Whether you're new to design patterns or looking to deepen your React expertise, here’s a suggested path:

1.  **Start with Fundamentals:** Begin with [SOLID Principles](./docs/solid-principles.md) to lay a strong foundation.
2.  **Explore Classic Patterns:** Dive into [Creational Patterns](./docs/creational/README.md), then [Structural Patterns](./docs/structural/README.md), and finally [Behavioral Patterns](./docs/behavioral/README.md).
3.  **Master Advanced React:** Conclude with the [Advanced React Patterns](./docs/advanced/README.md) to understand modern React idioms.


## 🧠 Real-World Connections

### 🔗 Real-World Usage of Patterns in React

| Pattern Type | Pattern               | Real-World Example                                                             |
|--------------|-----------------------|--------------------------------------------------------------------------------|
| Advanced     | Children as Props     | Flexible data providers or UI layout components (`<Modal>{() => ...}</Modal>`) |
| Creational   | Singleton             | `React.createContext()` for shared state                                       |
| Creational   | Factory Method        | `styled-components` factory for styled buttons                                 |
| Structural   | Decorator             | `higher-order components` (HOC)                                                |
| Structural   | Proxy                 | `React.lazy` + `Suspense` for lazy-loading                                     |
| Behavioral   | Observer              | `useEffect` + `useState` combo                                                 |
| Behavioral   | State                 | Local component state with `useState()`                                        |
| Behavioral   | Memento               | Form history and undo/redo                                                     |

## 🛠️ How to contribute

Feel free to fork this project and contribute with more patterns, examples, or improvements.

## 🖋️ Author

Alejandro Pla Cambra from OpositaTest.

## 🌟 License

MIT