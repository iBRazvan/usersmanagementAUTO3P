import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import "./index.css";
import App from "./App";
import reducer from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({ reducer });

root.render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
