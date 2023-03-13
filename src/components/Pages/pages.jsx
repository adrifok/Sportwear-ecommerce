import React from "react";
import { Switch, Route} from "react-router-dom";
import  Home  from "../Home/index";
import { ProductsList } from "../Products/index";
import {ProductsDetails} from "../Products/productsDetails";

export default function Pages (){
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={ProductsList} />
         <Route path="/producto/:id" exact component={ProductsDetails} />
      </Switch>
    </section>
  );
};
