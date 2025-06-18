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

const ClonedButton = cloneComponent(ButtonFactory, { type: 'secondary', label: 'Cloned Button' });

const ThemedComponent = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
    </div>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>📦 Creational Patterns in React</h1>

        <section>
          <h2>🏭 Factory Method</h2>
          <ButtonFactory type="primary" label="Primary Button" />
          <ButtonFactory type="secondary" label="Secondary Button" />
        </section>

        <section>
          <h2>🏗️ Abstract Factory</h2>
          {LightThemeFactory.createButton({ children: 'Light Button' })}
          {DarkThemeFactory.createCard({ children: 'Dark Card' })}
        </section>

        <section>
          <h2>🔧 Builder</h2>
          <FormBuilder fields={fields} />
        </section>

        <section>
          <h2>🧬 Prototype</h2>
          <ClonedButton />
        </section>

        <section>
          <h2>🛰️ Singleton</h2>
          <ThemedComponent />
        </section>
      </div>
    </ThemeProvider>
  );
};
