// Adapter Example in React
// Adapting a third-party component to your app’s props interface
import Button from '@mui/material/Button';

export const AdaptedButton = ({ onClick, label }) => {
  return <Button onClick={onClick}>{label}</Button>;
};