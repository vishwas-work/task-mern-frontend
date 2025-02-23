import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import taskService from "./taskService";

export const createTask = createAsyncThunk(
  "task/createTask",
  async (TaskInput, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      // debugger;
      const response = await taskService.createTask(TaskInput, token);
      return response;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong!";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      const response = await taskService.getTasks(token);
      return response;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong!";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/delete",
  async (deleteId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      const deleteTask = await taskService.deleteTask(deleteId, token);
      return deleteTask;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong!";
      return thunkAPI.rejectWithValue(message);
    }

    // debugger;
  }
);

const initialState = {
  tasks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tasks.push(action.payload);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tasks = state.tasks.filter(
          (task) => task.tasks_id !== action.meta.arg
        );
      });
  },
});

export const { reset } = taskSlice.actions;
export default taskSlice.reducer;
