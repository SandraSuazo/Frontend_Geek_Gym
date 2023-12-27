import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    authUser: "",
    user: "",
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    cleanUser: (state) => {
      (state.authUser = ""), (state.user = "");
    },
  },
});

export const { setAuthUser, setUser, cleanUser } = userSlice.actions;
export const userData = (state) => state.user;
export default userSlice.reducer;
