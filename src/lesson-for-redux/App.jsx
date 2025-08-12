import { Provider } from "react-redux";
import { store } from "./store";
import { Counter } from "./Counter";
import { GihubExplorer } from "./GithubExplorer";

export function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Counter /> */}
        <GihubExplorer />
      </div>
    </Provider>
  );
}
