import { useState } from "react";
import Section from "./Section";

const App = () => {
  // const [count, setCount] = useState(0);
  // const [value, setValue] = useState("");
  const [isShow, setIsShow] = useState(false);

  return (
    // <>
    //   <input type="text" onChange={(e) => setValue(e.target.value)} />
    //   <button onClick={() => console.log(value)}>sent</button>
    //   {!!value.length && <p>{value}</p>}
    // </>
    // <div>
    //   <button onClick={() => setCount((prev) => prev + 1)}>
    //     increment (+)
    //   </button>

    //   <p>Count: {count}</p>

    //   <button onClick={() => setCount((prev) => prev - 1)}>
    //     decrement (-)
    //   </button>

    //   <button onClick={() => setCount(0)}>reset</button>
    // </div>
    // ---------------------------------------------
    <div>
      app
      {isShow && <Section />}
      <input type="checkbox" onChange={() => setIsShow(!isShow)} />
    </div>
  );
};

export default App;
