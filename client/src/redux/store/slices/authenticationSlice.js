import { createSlice } from "@reduxjs/toolkit";

const AuthenticationSlice = createSlice({
  name: "authentication",
  initialState: "",
  reducers: {
    signUp(state, action) {
      state = action.payload;
      return state;
    },
    logIn(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export default AuthenticationSlice.reducer;
export const { signUp, logIn } = AuthenticationSlice.actions;
