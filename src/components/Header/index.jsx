import React, { useContext } from "react";
import Nike from "../../images/Nike.jpg";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

export const Header = () => {
  const value = useContext(DataContext); //llamamos la constante value
  const [menu, setMenu] = value.menu;
  const [cart] = value.cart;

  const toogleMenu = () => {
    //fn q cambia el menu a verdadero o falso
    setMenu(!menu);
  };

  return (
    <header>
      <div className="menu">
        <box-icon name="menu"></box-icon>
      </div>

      <Link to="/">
        <div className="logo">
          <img src={Nike} alt="logo" width="150" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">PRODUCTS</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item_total">{cart.length}</span>
      </div>
    </header>
  );
};
