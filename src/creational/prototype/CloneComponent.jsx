// Prototype Pattern Example in React

export const cloneComponent = (Component, extraProps) => (props) =>
    <Component {...props} {...extraProps} />;
  
// Usage example:
// const ClonedButton = cloneComponent(Button, { disabled: true });
  