import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./slices/authenticationSlice";
import CurrencySelectorSlice from "./slices/currencySelectorSlice";
import ThemeChangeSlice from "./slices/themeChangeSlice";
import highLightsOptionSlice from "./slices/highLightsOptionSlice";

const store = configureStore({
  reducer: {
    authentication: AuthenticationSlice,
    currencySelector: CurrencySelectorSlice,
    themeChange: ThemeChangeSlice,
    highLightOptionChange: highLightsOptionSlice,
  },
});

export default store;
