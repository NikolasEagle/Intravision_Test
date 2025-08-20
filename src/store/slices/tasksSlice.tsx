"use client";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, tenantguid } from "../apiData";

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

export const getTask = createAsyncThunk(
  "tasks/getTask",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${url}/api/${tenantguid}/Tasks/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postTasks = createAsyncThunk(
  "tasks/postTasks",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        `${url}/api/${tenantguid}/Tasks`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const putTasks = createAsyncThunk(
  "tasks/putTasks",
  async (data, thunkAPI) => {
    try {
      const response = await axios.put(`${url}/api/${tenantguid}/Tasks`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    loading: false,
    selectedId: null,
    selectedTask: {},
    tasks: {},
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
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedTask = action.payload;
      })
      .addCase(getTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedId = action.payload;
      })
      .addCase(postTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(putTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(putTasks.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(putTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default tasksSlice.reducer;
