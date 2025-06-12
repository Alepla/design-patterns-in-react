// Composite Example in React
// Treating individual and composite UI elements the same

const MenuItem = ({ label }) => <li>{label}</li>;

export const Menu = ({ items }) => (
  <ul>
    {items.map((item, i) =>
      item.items ? <Menu key={i} items={item.items} /> : <MenuItem key={i} label={item.label} />
    )}
  </ul>
);