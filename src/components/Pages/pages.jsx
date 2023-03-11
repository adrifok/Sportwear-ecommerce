import React from "react";
import {
  //Switch,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Home } from "../Home";
import { ProductsList } from "../Products/index";

export const Pages = () => {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={ProductsList} />
        </Routes>
      </Router>
    </section>
  );
};
