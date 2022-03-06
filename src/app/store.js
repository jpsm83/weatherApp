import { configureStore } from "@reduxjs/toolkit";
import locationReducers from "../features/locationSlice";
import weatherReducers from "../features/weatherSlice";

export const store = configureStore({
  reducer: {
    location: locationReducers,
    weather: weatherReducers,
  },
});
