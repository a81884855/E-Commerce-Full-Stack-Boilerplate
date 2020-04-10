import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import { CookiesProvider } from "react-cookie";
import { Provider as ProductsProvider } from "./context/ProductContext";
import { Provider as ProductProvider } from "./context/ProductDetail";

ReactDOM.render(
  <CookiesProvider>
    <ProductsProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </ProductsProvider>
  </CookiesProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
