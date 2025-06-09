// Template Method Pattern Example in React
// Defining a skeleton and allowing steps to be customized
import React from 'react';

const withLayout = (Component) => () => (
  <div style={{ border: '1px solid gray', padding: '1rem' }}>
    <h3>Header</h3>
    <Component />
    <footer>Footer</footer>
  </div>
);

const PageContent = () => <p>This is the content area.</p>;
export const TemplateMethodExample = withLayout(PageContent);