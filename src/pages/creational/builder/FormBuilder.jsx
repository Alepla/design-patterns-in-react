// Builder Pattern Example in React

export const FormBuilder = ({ fields }) => (
    <form>
      {fields.map((field) => (
        <input
          key={field.name}
          type={field.type}
          placeholder={field.label}
          value={field.value}
          onChange={field.onChange}
        />
      ))}
    </form>
  );
  