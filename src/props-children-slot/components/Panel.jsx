const Panel = ({ title = "Заголовок панельки", children }) => {
  return (
    <div
      style={{
        border: "1px solid #4caf50",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Panel;
