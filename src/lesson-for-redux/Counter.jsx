import { useDispatch, useSelector } from "react-redux";
import { add, decrement, increment } from "./counter.slice";

export function Counter() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);

  const onAdd = () => {
    const valueToAdd = +prompt("введите значение");
    dispatch(add(valueToAdd));
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={onAdd}>добавить</button>
    </div>
  );
}
