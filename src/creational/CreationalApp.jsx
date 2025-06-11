// src/creational/App.jsx
import React from 'react';
import { ButtonFactory } from './factory-method/ButtonFactory';
import { LightThemeFactory, DarkThemeFactory } from './abstract-factory/ThemeFactory';
import { FormBuilder } from './builder/FormBuilder';
import { cloneComponent } from './prototype/CloneComponent';
import { ThemeProvider, useTheme } from './singleton/ThemeContext';

const fields = [
  { name: 'email', type: 'email', label: 'Email', value: '', onChange: () => {} },
  { name: 'password', type: 'password', label: 'Password', value: '', onChange: () => {} },
];

// 🧬 Prototype pattern - clone a component with props
const ClonedButton = cloneComponent(ButtonFactory, {
  type: 'secondary',
  label: 'Cloned Button',
});

// 🛰️ Singleton pattern - theme toggler
const ThemedComponent = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div style={{ marginTop: '1rem' }}>
      <p>
        <strong>Current Theme:</strong> {theme}
      </p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};

const CreationalApp = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: '2rem', fontFamily: 'sans-serif', lineHeight: 1.6 }}>
        <h1>📦 Creational Patterns in React</h1>

        <section style={{ marginBottom: '2rem' }}>
          <h2>🏭 Factory Method</h2>
          <p>Create components dynamically based on input.</p>
          <ButtonFactory type="primary" label="Primary Button" />
          <ButtonFactory type="secondary" label="Secondary Button" />
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>🏗️ Abstract Factory</h2>
          <p>Use families of themed components without specifying concrete classes.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {LightThemeFactory.createButton({ children: 'Light Button' })}
            {DarkThemeFactory.createCard({ children: 'Dark Card' })}
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>🔧 Builder</h2>
          <p>Build complex components step by step.</p>
          <FormBuilder fields={fields} />
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>🧬 Prototype</h2>
          <p>Clone existing components with new props.</p>
          <ClonedButton />
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2>🛰️ Singleton</h2>
          <p>Use a single shared instance (e.g., global state via Context).</p>
          <ThemedComponent />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default CreationalApp;