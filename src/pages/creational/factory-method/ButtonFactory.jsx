// Factory Method Example in React

const PrimaryButton = ({ label }) => <button className="btn btn-primary">{label}</button>;
const SecondaryButton = ({ label }) => <button className="btn btn-secondary">{label}</button>;
const DefaultButton = ({ label }) => <button className="btn">{label}</button>;

export const ButtonFactory = ({ type, label }) => {
  if (type === 'primary') return <PrimaryButton label={label} />;
  if (type === 'secondary') return <SecondaryButton label={label} />;
  return <DefaultButton label={label} />;
};
