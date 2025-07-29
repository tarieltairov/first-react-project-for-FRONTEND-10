import React, { useEffect, useState } from "react";

// useEffect() - хук для отслеживания жизненного цикла компонента
// принимает 2 аргумента:
// 1) коллбек функию
// 2) массив зависимостей
// если хотим отловить смерть - то мы должны возвращать коллбек функцию

const Section = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("рождение");
    return () => {
      console.log("смерть");
    };
  }, []);

  useEffect(() => {
    console.log("изменение");
  }, [count]);

  // если не передавать массив зависимостей - useEffect будет отрабатывать
  // на каждое изменение компонента = баг
  // useEffect(() => {
  //   console.log("test");
  // });

  return (
    <div>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>
          increment (+)
        </button>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prev) => prev - 1)}>(-)</button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>
    </div>
  );
};

export default Section;
