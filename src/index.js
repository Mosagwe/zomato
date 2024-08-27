import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stores/store";
import CartProvider from "./hooks/useCart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
