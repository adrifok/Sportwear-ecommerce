import React from "react";
import{Link} from "react-router-dom";
import FrontPage from "../../images/inicio.jpg";


export default function Home()  {
  return (

    <div className="start">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/products">
      <h1 className="title">Products</h1>
      </Link>
      <img src={FrontPage} alt="start"/>
    </div>
  )
  };
  