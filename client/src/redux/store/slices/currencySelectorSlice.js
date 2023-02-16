import { createSlice } from "@reduxjs/toolkit";

const CurrencySelectorSlice = createSlice({
  name: "currencySelector",
  initialState: "USD",
  reducers: {
    changeCurrency(state, action) {
      state = action.payload;
      return state;
    },
  },
});
export default CurrencySelectorSlice.reducer;
export const { changeCurrency } = CurrencySelectorSlice.actions;
