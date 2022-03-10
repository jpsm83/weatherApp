import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncLocation = createAsyncThunk(
  "imdb/fetchAsyncLocation",
  async (postCode) => {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          components: `country:ES|postal_code:${postCode}`,
          region: "ES",
          key: process.env.REACT_APP_GOOGLE_API_KEY,
        },
      }
    );
    return response.data;
  }
);

const initialState = {
  locationNow: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.locationNow = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncLocation.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncLocation.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, locationNow: payload };
    },
    [fetchAsyncLocation.rejected]: () => {
      console.log("Rejected!");
    },
  },
});

export const { setLocation } = locationSlice.actions;

export const getLocation = (state) => state.location.locationNow;

export default locationSlice.reducer;
