import { configureStore } from "@reduxjs/toolkit";
import { jobsReducer } from "./JobsSlice";

let store = configureStore({
  reducer: {
    JobsRed: jobsReducer,
  },
});

export default store;
