import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./web/HomePage";
import Header from "./web/Header";
import Shop from "./web/Shop";

function App() {
  return (
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
  );
}

export default App;
