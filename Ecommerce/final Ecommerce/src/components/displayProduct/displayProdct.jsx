import React, { useContext } from "react";
import "./displayProduct.css";
import star_icon from "../Assets/star_icon.png";
import  star_dull_icon from '../Assets/star_icon.png'
import { ShopContext } from "../../context/Shopcontext";
const DisplayProdct = (props) => {
  const { product } = props;
  const[addToCart] = useContext(ShopContext);
  return (
    <div className="display-product">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisply-img">
          <img
            className="productdisplay-main-img
          "
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon}alt="" />
        <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdispaly-right-discraption">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quasi ratione rerum sed perspiciatis!
        </div>
        <div className="productdisplay-right-size">
          <h1>select size</h1>
        
        <div className="productdisplay-right-sizes">
          <div>S</div>
          <div>X</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
        </div>
        </div>
          <button onClick={() => {addToCart(product.id)}}>Add TO Cart</button>
          <p className="productdisplay-right-category"><span>Category: </span>women, T-Shirt, Crop Top</p>
          <p className="productdisplay-right-category"> <span>Tags: </span>Modern, latest</p>
         
          
        

      </div>
    </div>
  );
};

export default DisplayProdct;
