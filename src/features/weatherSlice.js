import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncWeather = createAsyncThunk(
  "weather/fetchAsyncWeather",
  async (currentLocation) => {
    const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
    const { lat, lng } = currentLocation.results[0].geometry.location;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&units=metric&appid=${API_KEY}`
    );
    return response.data;
  }
);

// export const fetchAsyncWeather = createAsyncThunk(
//   "weather/fetchAsyncWeather",
//   async ({ currentLocation }, { dispatch, getState }) => {
//     const { location } = getState();
//     console.log({ location })
//     const API_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY;
//     const { lat, lng } = currentLocation.results[0].geometry.location;
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely&units=metric&appid=${API_KEY}`
//     );
//     return response.data;
//   }
// );

const initialState = {
  currentWeather: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.currentWeather = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncWeather.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncWeather.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, currentWeather: payload };
    },
    // [fetchAsyncWeather.fulfilled]: (state, { payload }) => {
    //   console.log("Fetched Successfully!");
    //   return (state.currentWeather = payload);
    // },
    [fetchAsyncWeather.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { setWeather } = weatherSlice.actions;

export const getWeather = (state) => state.weather.currentWeather;

export default weatherSlice.reducer;
