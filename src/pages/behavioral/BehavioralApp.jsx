import React from 'react';
import { ChainExample } from './chain-of-responsibility/ChainExample';
import { CommandExample } from './command/CommandExample';
import { IteratorExample } from './iterator/IteratorExample';
import { MediatorExample } from './mediator/MediatorExample';
import { MementoExample } from './memento/MementoExample';
import { ObserverExample } from './observer/ObserverExample';
import { StateExample } from './state/StateExample';
import { StrategyExample } from './strategy/StrategyExample';
import { TemplateMethodExample } from './template-method/TemplateMethodExample';
import { VisitorExample } from './visitor/VisitorExample';

const BehavioralApp = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Behavioral Design Patterns in React</h1>

      <section>
        <h2>🔗 Chain of Responsibility</h2>
        <ChainExample />
      </section>

      <section>
        <h2>🧾 Command</h2>
        <CommandExample />
      </section>

      <section>
        <h2>📜 Iterator</h2>
        <IteratorExample />
      </section>

      <section>
        <h2>📡 Mediator</h2>
        <MediatorExample />
      </section>

      <section>
        <h2>💾 Memento</h2>
        <MementoExample />
      </section>

      <section>
        <h2>👀 Observer</h2>
        <ObserverExample />
      </section>

      <section>
        <h2>🔄 State</h2>
        <StateExample />
      </section>

      <section>
        <h2>🎯 Strategy</h2>
        <StrategyExample />
      </section>

      <section>
        <h2>📂 Template Method</h2>
        <TemplateMethodExample />
      </section>

      <section>
        <h2>👤 Visitor</h2>
        <VisitorExample />
      </section>
    </div>
  );
};

export default BehavioralApp