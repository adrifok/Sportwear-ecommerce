import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";

export const ProductItem = ({
  id,
  title,
  price,
  image,
  category,
  //quantity
}) => {
  const value = useContext(DataContext);
  const addCart = value.addCart;

  return (
    <div key={id} className="product">
      <Link to={`/product/${id}`}>
        <div className="product_img">
          <img src={image.default} alt="title" />
        </div>
      </Link>
      <div className="product_footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price}</p>
      </div>
      <div className="button">
        <button onClick={() => addCart(id)} className="btn">
          Add to cart
        </button>
        <div>
          <Link to={`/product/${id}`} className="btn">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};
