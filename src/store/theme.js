import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};

export const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = theme.actions;

export default theme.reducer;
