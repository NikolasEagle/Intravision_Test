import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, tenantguid } from "../apiData";

export const getPriorities = createAsyncThunk(
  "priorities/getPriorities",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${url}/api/${tenantguid}/Priorities`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const prioritiesSlice = createSlice({
  name: "priorities",
  initialState: {
    loading: false,
    priorities: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPriorities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPriorities.fulfilled, (state, action) => {
        state.loading = false;
        state.priorities = action.payload;
      })
      .addCase(getPriorities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default prioritiesSlice.reducer;
