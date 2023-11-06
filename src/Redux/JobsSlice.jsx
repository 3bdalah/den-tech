import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  jobs: [],
  counterJobs: 2,
};

let jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
});

export let jobsReducer = jobsSlice.reducer;
