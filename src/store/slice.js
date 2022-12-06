import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state) => {
      if (state.mode === "dark") {
        state.mode = "light";
      } else {
        state.mode = "dark";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;
