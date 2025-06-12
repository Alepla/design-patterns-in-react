// Bridge Example in React
// Decoupling abstraction (UI) from implementation (theme logic)

const themes = {
    light: {
      background: '#fff',
      color: '#000',
    },
    dark: {
      background: '#000',
      color: '#fff',
    },
  };
  
  export const ThemedCard = ({ theme, children }) => {
    const style = themes[theme] || themes.light;
    return <div style={style}>{children}</div>;
  };