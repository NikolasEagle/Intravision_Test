import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://intravision-task.test01.intravision.ru";

const tenantguid = "fef42ceb-ba34-424e-ab43-7769aca6f5c1";

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${url}/odata/tasks?tenantguid=${tenantguid}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    loading: false,
    tasks: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.loading = true;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default tasksSlice.reducer;
