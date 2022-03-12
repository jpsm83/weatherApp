import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationDetails: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.locationDetails = action.payload;
    },
    cleanLocation: (state) => {
      state.locationDetails = ""
    }
  },
});

export const { setLocation, cleanLocation } = locationSlice.actions;

export const getLocationData = (state) => state.location.locationDetails;

export default locationSlice.reducer;
