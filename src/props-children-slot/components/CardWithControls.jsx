const CardWithControls = ({
  title,
  header,
  footer,
  children,
  isLoading = false,
  onRefresh,
  showRefresh = false,
  error = false,
}) => {
  if (error) {
    return <p>Произошла ошибка</p>;
  }

  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "1rem",
        maxWidth: "400px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Заголовок */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{title}</h3>
        {showRefresh && <button onClick={onRefresh}>Обновить</button>}
      </div>

      {/* Слот header */}
      {header && <div style={{ marginBottom: "1rem" }}>{header}</div>}

      {/* Условный рендеринг */}
      <div style={{ minHeight: "60px" }}>
        {isLoading ? (
          <p>Загрузка ...</p>
        ) : children ? (
          children
        ) : (
          <p style={{ fontStyle: "italic", color: "#999" }}>Нет данных</p>
        )}
      </div>

      {/* Слот footer */}
      {footer && (
        <div
          style={{
            marginTop: "1rem",
            borderTop: "1px solid #eeee",
            paddingTop: "0.5rem",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

export default CardWithControls;
