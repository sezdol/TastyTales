import React, { useState } from "react";
import "./Menu.css";
import { BsPlusCircleFill } from "react-icons/bs";
import Cdata from '../Cart/Cdata.js';


const Menuitems = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const addToCart = (data, quantity) => {

    const existingData = Cdata.find(item => item.id === data.id);
    if (existingData) {
      existingData.quantity = quantity;
    } else {
      Cdata.push({ ...data, quantity: quantity });
    }
  };

  return (
    <section className="wrapper">
      <div className="product-card">
        <div className="thumbnail">
          <img src={props.imgsrc} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">{props.pname}</span>
          <span className="price">&#8377;{props.price}</span>
        </div>
        <div className="cart-buttons">
          <div className="quantity-buttons">
            <span onClick={decreaseQuantity}>-</span>
            <span>{quantity}</span>
            <span onClick={increaseQuantity}>+</span>
          </div>
          <button className="add-to-cart-button" onClick={() => addToCart(props, quantity)}>
            <BsPlusCircleFill size={15} />
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menuitems;
