// Flyweight Example in React
// Sharing common UI configurations

const ButtonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
};
  
export const FlyweightButton = ({ label, color }) => (
    <button style={{ ...ButtonStyle, backgroundColor: color }}>{label}</button>
);