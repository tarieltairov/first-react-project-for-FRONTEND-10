import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter.slice";
import { githubSlice } from "./github.slice";

export const store = configureStore({
  reducer: { counter: counterSlice.reducer, gihub: githubSlice.reducer },
});
