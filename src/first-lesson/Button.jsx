// В реакте атрибуты пишутся в стиле camelCase

// export const Button = () => {
//   return <button onClick={() => console.log("clicked")}>Click</button>;
// };

export const Button = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  // return <button onClick={() => handleClick()}>Click</button>;
  return <button onClick={handleClick}>Click</button>;
};
