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
    changeModeWithColor: (state, action) => {
      state.mode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeMode, changeModeWithColor } = modeSlice.actions;

export default modeSlice.reducer;
