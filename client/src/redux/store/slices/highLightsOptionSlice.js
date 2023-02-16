import { createSlice } from "@reduxjs/toolkit";

const highLightsOptionSlice = createSlice({
  name: "highLightOption",
  initialState: Boolean,
  reducers: {
    changeHighLightOption(state, action) {
      return (state = action.payload);
    },
  },
});

export default highLightsOptionSlice.reducer;
export const { changeHighLightOption } = highLightsOptionSlice.actions;
