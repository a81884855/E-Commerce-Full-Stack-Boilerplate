import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./web/HomePage";
import Header from "./web/Header";
import Shop from "./web/Shop";
import Product from "./web/ProductDetail";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/product-detail/:name">
          <Product />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/">Hello World</Route>
      </Switch>
    </Router>
  );
}

export default App;
