// Slot
// слот - передача jsx в виде пропса (атрибута)

const Card = ({
  header = <p>Шапка</p>,
  footer = <p>подвал</p>,
  children = <p>контент</p>,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "1rem",
      }}
    >
      <div>{header}</div>
      <div style={{ margin: "1rem 0" }}>{children}</div>
      <div>{footer}</div>
    </div>
  );
};

export default Card;
