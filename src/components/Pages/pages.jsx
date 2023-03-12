import React from "react";
import  Home  from "../Home/index";
import { Switch, Route} from "react-router-dom";
import { ProductsList } from "../Products/index";
//import {ProductsDetails} from "./"

export const Pages = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={ProductsList} />
        {/* <Route path="/producto/:id" exact component={ProductsDetails} /> */}
      </Switch>
    </section>
  );
};
