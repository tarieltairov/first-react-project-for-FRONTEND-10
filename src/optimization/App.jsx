// import { Parent } from "./examples/first/FirstExample";

import Parent from "./examples/fourth/FourthExample";

// import { ShowResultFromHeavy } from "./examples/third/ThirdExample";

// import { Parent } from "./examples/second/SecondExample";

export function App() {
  return (
    <div>
      <h1>Мемоизация и оптимизация</h1>

      <h2>ререндеры - state или props</h2>
      <p>app - Parent - child</p>
      <h3>memo, useMemo, useCallback</h3>

      <hr />

      {/* <Parent /> */}
      {/* <Parent /> */}
      {/* <ShowResultFromHeavy /> */}
      <Parent />
    </div>
  );
}
