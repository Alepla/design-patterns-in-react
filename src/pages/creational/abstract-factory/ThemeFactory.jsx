// Abstract Factory Example in React

const LightButton = (props) => <button className="light-btn" {...props} />;
const DarkButton = (props) => <button className="dark-btn" {...props} />;

const LightCard = (props) => <div className="light-card" {...props} />;
const DarkCard = (props) => <div className="dark-card" {...props} />;

export const LightThemeFactory = {
  createButton: (props) => <LightButton {...props} />,
  createCard: (props) => <LightCard {...props} />,
};

export const DarkThemeFactory = {
  createButton: (props) => <DarkButton {...props} />,
  createCard: (props) => <DarkCard {...props} />,
};
