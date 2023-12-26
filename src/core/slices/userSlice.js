import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    cleanUser: (state) => {
      state.user = "";
    },
  },
});

export const { setUser, cleanUser } = userSlice.actions;
export const userData = (state) => state.user;
export default userSlice.reducer;
