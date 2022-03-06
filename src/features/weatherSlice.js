import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentWeather: ""
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeather: (state, action) => {
            state.currentWeather = action.payload
        }
    },    
})

export const { setWeather } = weatherSlice.actions;

export const getWeather = (state) => state.weather.currentWeather;

export default weatherSlice.reducer;