import React from "react";
import IMG from "../../images/img01.jpg";
export const ProductsList = () => {
  return (
    <>
      <h1 className="title">PRODUCTS</h1>
      <div className="products">
        <div className="producto">
         {/* eslint-disable-next-line */}
          <a href="#">
            <div className="product_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="product_footer">
            <h1>Title</h1>
            <p>Category</p>
            <p className="price">$ 320.00</p>
          </div>
          <div className="button">
            <button className="btn">Add to cart...</button>
            <div>
              <a href="#" className="btn">
                View
              </a>
            </div>
          </div>
        </div>

        <div className="producto">
          <a href="#">
            <div className="product_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="product_footer">
            <h1>Title</h1>
            <p>Category</p>
            <p className="price">$ 320.00</p>
          </div>
          <div className="button">
            <button className="btn">Add to cart...</button>
            <div>
              <a href="#" className="btn">
                View
              </a>
            </div>
          </div>
        </div>

        <div className="producto">
          <a href="#">
            <div className="product_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="product_footer">
            <h1>Title</h1>
            <p>Category</p>
            <p className="price">$ 320.00</p>
          </div>
          <div className="button">
            <button className="btn">Add to cart...</button>
            <div>
              <a href="#" className="btn">
                View
              </a>
            </div>
          </div>
        </div>

        <div className="producto">
          <a href="#">
            <div className="product_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="product_footer">
            <h1>Title</h1>
            <p>Category</p>
            <p className="price">$ 320.00</p>
          </div>
          <div className="button">
            <button className="btn">Add to cart...</button>
            <div>
              <a href="#" className="btn">
                View
              </a>
            </div>
          </div>
        </div>

        <div className="producto">
          <a href="#">
            <div className="product_img">
              <img src={IMG} alt="" />
            </div>
          </a>
          <div className="product_footer">
            <h1>Title</h1>
            <p>Category</p>
            <p className="price">$ 320.00</p>
          </div>
          <div className="button">
            <button className="btn">Add to cart...</button>
            <div>
              <a href="#" className="btn">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
