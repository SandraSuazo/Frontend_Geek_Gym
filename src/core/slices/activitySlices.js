import { createSlice } from "@reduxjs/toolkit";

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    activities: [],
  },
  reducers: {
    setActivities: (state, action) => {
      state.activities = action.payload;
    },
    cleanActivities: (state) => {
      state.activities = [];
    },
  },
});

export const { setActivities, cleanActivities } = activitySlice.actions;
export const activityData = (state) => state.activity;
export default activitySlice.reducer;
