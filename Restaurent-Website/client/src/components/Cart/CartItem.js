import React from "react";
import { MdClose } from "react-icons/md";
import "./Cart.css";
import Cdata from "./Cdata";

const CartItem = () => {
  return (
    <div className="cart-products">
      {Cdata.map((item) => (
        <div className="cart-product" key={item.id}>
          <div className="img-container">
            <img src={item.imgsrc} alt={item.pname} />
          </div>
          <div className="cart-prod-details">
            <span className="name">{item.pname}</span>
            <MdClose className="close-btn" />
            <div className="quantity-buttons">
              <span>-</span>
              <span>{item.quantity}</span>
              <span>+</span>
            </div>
            <div className="text">
              <span>{item.quantity}</span>
              <span>x</span>
              <span className="highlight">₹{item.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
