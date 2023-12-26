import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    cleanToken: (state) => {
      state.token = "";
    },
  },
});

export const { setToken, cleanToken } = authSlice.actions;
export const authData = (state) => state.token;
export default authSlice.reducer;
