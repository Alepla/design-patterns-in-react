# React Design Patterns - Creational, Structural, and Behavioral

![MIT License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react)
![Patterns](https://img.shields.io/badge/Design%20Patterns-23%20Total-blueviolet)
![Tests](https://img.shields.io/badge/Tests-Coming%20Soon-yellow)

This project is a personal study based on the book *Dive Into Design Patterns* by Alexander Shvets.  
It focuses on learning and applying **Design Patterns** in modern **React (v18/19)** projects, with practical code examples and Markdown documentation.

## 📚 Contents

### 🧱 SOLID Principles

- [SOLID Principles](./docs/solid-principles.md)

### 🧩 Design Patterns

#### 🔨 Creational Patterns
- [Factory Method](./docs/creational/factory-method.md)
- [Abstract Factory](./docs/creational/abstract-factory.md)
- [Builder](./docs/creational/builder.md)
- [Prototype](./docs/creational/prototype.md)
- [Singleton](./docs/creational/singleton.md)

#### 🏗️ Structural Patterns
- [Adapter](./docs/structural/adapter.md)
- [Bridge](./docs/structural/bridge.md)
- [Composite](./docs/structural/composite.md)
- [Decorator](./docs/structural/decorator.md)
- [Facade](./docs/structural/facade.md)
- [Flyweight](./docs/structural/flyweight.md)
- [Proxy](./docs/structural/proxy.md)

#### 🔄 Behavioral Patterns
- [Chain of Responsibility](./docs/behavioral/chain-of-responsability.md)
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

If you're new to design patterns, follow this path:

1. 🧱 Start with [SOLID Principles](./docs/solid-principles.md)
2. 📦 Learn [Creational Patterns](./docs/creational/README.md)
3. 🏗️ Explore [Structural Patterns](./docs/structural/README.md)
4. 🔄 Finish with [Behavioral Patterns](./docs/behavioral/README.md)

## 🧠 Real-World Connections

### 🔗 Real-World Usage of Patterns in React

| Pattern Type | Pattern          | Real-World Example                                  |
|--------------|------------------|-----------------------------------------------------|
| Creational   | Singleton        | `React.createContext()` for shared state            |
| Creational   | Factory Method   | `styled-components` factory for styled buttons      |
| Structural   | Decorator        | `higher-order components` (HOC)                     |
| Structural   | Proxy            | `React.lazy` + `Suspense` for lazy-loading          |
| Behavioral   | Observer         | `useEffect` + `useState` combo                      |
| Behavioral   | State            | Local component state with `useState()`             |
| Behavioral   | Memento          | Form history and undo/redo                          |

## 🛠️ How to contribute

Feel free to fork this project and contribute with more patterns, examples, or improvements.

## 🖋️ Author

Alejandro Pla Cambra from OpositaTest.

## 🌟 License

MIT