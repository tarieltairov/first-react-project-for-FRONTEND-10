export function UserCard({ name, age, avatar }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "12px",
        width: "300px",
      }}
    >
      <img width={200} height={300} src={avatar} alt="avatar" />
      <h3>{name}</h3>
      <p>Возраст: {age}</p>
    </div>
  );
}
