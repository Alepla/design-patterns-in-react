// Decorator Example in React
// Enhancing component functionality with HOCs

export const withLogging = (Component) => {
    return (props) => {
      console.log('Props:', props);
      return <Component {...props} />;
    };
};
  
const Button = ({ label }) => <button>{label}</button>;
export const LoggedButton = withLogging(Button);