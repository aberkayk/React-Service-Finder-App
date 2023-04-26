import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "@splidejs/react-splide/css";

import "./style.css";
import SpinnerContextProvider from "./context/spinner-context-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <SpinnerContextProvider>
        <App />
      </SpinnerContextProvider>
    </Provider>
  </>
);