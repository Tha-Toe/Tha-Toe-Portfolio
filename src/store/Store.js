import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./slice";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});
