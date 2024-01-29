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
export const fetchTests = createAsyncThunk("testSlice/fetchTests", async () => {
  try {
    // const response = await axios.get("https://api.example.com/data");
    // return response.data;
    return tests;
  } catch (error) {
    throw error;
  }
});

export const createTest = createAsyncThunk(
  "testSlice/createTest",
  async (newTest) => {
    //  console.log(newTest);
    try {
      // Simulate adding a new test to the array
      // tests.push(newTest);
      // You can also make an API request to add the new test
      // const response = await axios.post('https://api.example.com/tests', newTest);
      // return response.data;

      const data = new FormData();
      data.append("name", newTest.name);
      data.append("age", newTest.age);
      data.append("gender", newTest.gender);
      data.append("location", newTest.location);

      data.append("onchoImage", {
        name: "onchoImage", // You can provide a custom name here if needed
        type: "image/jpeg", // Adjust the image type accordingly
        uri: newTest.onchoImage, // URI of the image
      });
      data.append("schistoImage", {
        name: "schistoImage", // You can provide a custom name here if needed
        type: "image/jpeg", // Adjust the image type accordingly
        uri: newTest.schistoImage, // URI of the image
      });
      data.append("lfImage", {
        name: "lfImage", // You can provide a custom name here if needed
        type: "image/jpeg", // Adjust the image type accordingly
        uri: newTest.lfImage, // URI of the image
      });
      data.append("helminthsImage", {
        name: "helminthsImage", // You can provide a custom name here if needed
        type: "image/jpeg", // Adjust the image type accordingly
        uri: newTest.helminthsImage, // URI of the image
      });

      console.log(data);
      // Make a POST request with Axios
      axios
        .post("YOUR_API_ENDPOINT", data, {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type to multipart form data
          },
        })
        .then((response) => {
          // Handle successful response
          console.log("Response:", response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
      // newTest.images.forEach((image, index) =>
      //   data.append("images", {
      //     name: "image" + index,
      //     type: "image/jpeg",
      //     uri: image,
      //   })
      // );
    } catch (error) {
      throw error;
    }
  }
);

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
