import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { tests } from "../../../config/dummydata/tests";
// Define the initial state
const initialState = {
  loading: false,
  error: null,
  tests: tests,
};

// Create an async thunk for making the API request
export const fetchTests = createAsyncThunk("testSlice/fetchTes", async () => {
  try {
    // const response = await axios.get("https://api.example.com/data");
    // return response.data;
    return tests;
  } catch (error) {
    throw error;
  }
});

// Create the slice
const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTests.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(fetchTests.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTests.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectTests = (state) => state.test.tests;
export default testSlice.reducer;
