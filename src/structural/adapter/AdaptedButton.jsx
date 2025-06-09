// Adapter Example in React
// Adapting a third-party component to your app’s props interface

import ThirdPartyButton from 'third-party-lib';

export const AdaptedButton = ({ onClick, label }) => {
  return <ThirdPartyButton handleClick={onClick} text={label} />;
};