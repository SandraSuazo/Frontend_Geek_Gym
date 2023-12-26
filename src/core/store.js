import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { thunk } from "redux-thunk";
import authSlice from "./slices/authSlice.js";
import userSlice from "./slices/userSlice.js";
import activitySlice from "./slices/activitySlices.js";

const reducers = combineReducers({
  token: authSlice,
  user: userSlice,
  activity: activitySlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});
