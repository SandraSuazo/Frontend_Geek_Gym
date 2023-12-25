import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import store from "./core/store.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { lightTheme } from "./shared/themes/lightTheme.js";
import { darkTheme } from "./shared/themes/darkTheme.js";

const persistor = persistStore(store);

const getTheme = () => {
  const prefersLightMode = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;
  return prefersLightMode ? lightTheme : darkTheme;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={getTheme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ToastContainer autoClose={3000} closeOnClick theme="dark" />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
