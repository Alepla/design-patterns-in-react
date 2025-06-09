import React from 'react';
import { AdaptedButton } from './adapter/AdaptedButton';
import { ThemedCard } from './bridge/ThemedCard';
import { LoggedButton } from './decorator/LoggedButton';
import { useUserData } from './facade/useUserData';
import { FlyweightButton } from './flyweight/FlyweightButton';
import { LazyComponent } from './proxy/LazyComponent';
import Menu from './composite/Menu';

export const App = () => {
  const { user, loadUser } = useUserData();

  return (
    <div style={{ padding: 20 }}>
      <h1>Structural Patterns Demo</h1>

      <h2>Adapter</h2>
      <AdaptedButton onClick={() => alert('Adapted!')} label="Adapt" />

      <h2>Bridge</h2>
      <ThemedCard theme="dark">This is a dark themed card.</ThemedCard>

      <h2>Composite</h2>
      <Menu
        items={[
          { label: 'Home' },
          { label: 'Products', items: [{ label: 'Phones' }, { label: 'Laptops' }] },
        ]}
      />

      <h2>Decorator</h2>
      <LoggedButton label="Click Me" />

      <h2>Facade</h2>
      <button onClick={loadUser}>Load User</button>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <h2>Flyweight</h2>
      <FlyweightButton label="Save" color="green" />
      <FlyweightButton label="Delete" color="red" />

      <h2>Proxy</h2>
      <LazyComponent load={() => import('./structural/proxy/HeavyComponent')} />
    </div>
  );
};