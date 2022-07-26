const variant = {
  primary: {
    backgroundColor: "#0070f3",
    color: "#fff",
  },
  success: {
    backgroundColor: "#00c853",
    color: "#fff",
  },
  error: {
    backgroundColor: "#d50000",
    color: "#fff",
  },
  warning: {
    backgroundColor: "#ffa000",
    color: "#fff",
  },
  info: {
    backgroundColor: "#607d8b",
    color: "#fff",
  },
};

const size = {
  small: {
    fontSize: "0.8rem",
    padding: "5px",
    borderRadius: "5px",
  },
  medium: {
    fontSize: "1rem",
    padding: "10px",
    borderRadius: "10px",
   },
  large: {
    fontSize: "1.2rem",
    padding: "12px",
    borderRadius: "10px",
   },
};

export default function Button(props) {
  const userVariant = variant[props.variant];
  const userSize = size[props.size];
  const { Text, type } = props;
  return (
    <button
      style={{
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        outline: "none",
        cursor: "pointer",
        margin: "10px 2px",
        ...userVariant,
        ...userSize,
      }}
      type={type}
    >
      {Text}
    </button>
  );
}
