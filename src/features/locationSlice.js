import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    locationNow: '',
}

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.locationNow = action.payload
        },
        clearLocation: (state) => {
            state.locationNow = ""
        }
    }
})

export const { setLocation, clearLocation } = locationSlice.actions;

export const getLocation = (state) => state.location.locationNow;

export default locationSlice.reducer;