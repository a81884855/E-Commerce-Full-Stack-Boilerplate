import React from "react";
import { HashRouter, Route } from "react-router-dom";
import HomePage from "./web/HomePage";
import Header from "./web/Header";
import Shop from "./web/Shop";
import Product from "./web/ProductDetail";

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/product-detail/:name">
          <Product />
        </Route>
        <Route path="/hello">
          <div>Hello</div>
        </Route>
      </>
    </HashRouter>
  );
}

export default App;
