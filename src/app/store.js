import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import taskReducer from "../features/tasks/taskSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    task: taskReducer,
  }, // Your reducers will go here
});

// import authReducer from ‘../features/auth/authSlice’
// export const store = configureStore({
// reducer: {
// auth: authReducer
//  }
// });
