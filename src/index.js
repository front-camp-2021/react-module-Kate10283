import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getProducts } from "./store/actions/productsActions";
import store from "./store/store";

store.dispatch(getProducts());

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
