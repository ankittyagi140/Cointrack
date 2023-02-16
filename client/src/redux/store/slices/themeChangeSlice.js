import { createSlice } from "@reduxjs/toolkit";

const ThemeChangeSlice = createSlice({
  name: "themeChange",
  initialState: "day",
  reducers: {
    setTheme(state, action) {},
  },
});
export default ThemeChangeSlice.reducer;
export const { setTheme } = ThemeChangeSlice;
