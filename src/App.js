import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./web/HomePage";
import Header from "./web/Header";
import Shop from "./web/Shop";
import { Provider as ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/Shop">
            <Shop />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </ProductProvider>
  );
}

export default App;
