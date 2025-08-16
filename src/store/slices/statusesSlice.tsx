import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, tenantguid } from "../configureStore";

export const getStatuses = createAsyncThunk(
  "statuses/getStatuses",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${url}/api/${tenantguid}/Statuses`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const statusesSlice = createSlice({
  name: "statuses",
  initialState: {
    loading: false,
    statuses: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStatuses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStatuses.fulfilled, (state, action) => {
        state.loading = false;
        state.statuses = action.payload;
      })
      .addCase(getStatuses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default statusesSlice.reducer;
