// Props
// пропс - способо передачи данных от родителя к дочернему компоненту
// данные передаваемые - могуть быть любыми

export function Greeting({ name, age }) {
  // const { name, age } = props;
  // console.log("Greeting props - ", props);

  return (
    <h1>
      Привет {name}. Тебе {age} лет!
    </h1>
  );
}

// function test(param) {
//   console.log(param);
// }

// test("123");
