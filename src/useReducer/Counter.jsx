import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Неизвестное действие");
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <h2>Счетчик: {state?.count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>сброс</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
};
