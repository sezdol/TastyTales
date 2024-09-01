import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItem";
import "./Cart.css";
import Cdata from "./Cdata";
import {loadStripe} from '@stripe/stripe-js'


const Cart = ({ setShowCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let ctotal = 0;

    Cdata.map((data) => {
      return ctotal = ctotal + (data.price * data.quantity);
    })
    setTotal(ctotal);

  }, [])

  const handleCheckout = async() => {
    console.log(Cdata)
    const stripe = await loadStripe('pk_test_51NhA6gSBARtcUDbhoB5UchdoTVaU145717PY1I5tk7E0Y1i9mmGHgnRON9doR92YfiE85at9N3TpwH8AUsrCJ9Au00SViIgfzi');
    const body = {
      products : Cdata
    }

    const headers = {
      "Content-Type" : "application/json"
    }

    const response = await fetch('https://restaurent-website-2.onrender.com/api/payment/create-checkout', {
      method: "POST", 
      headers: headers,
      body: JSON.stringify(body) 
    });

    const session = await  response.json();

    const result = stripe.redirectToCheckout({
      sessionId : session.id
    })

    if(result.error){
      console.log(result.error)
    }

  }


  return (
    <div className="cart-panel">
      <div className="opac-layer" onClick={() => setShowCart(false)}></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        <CartItem />
        <div className="cart-footer">
          <div className="subtotal">
            <div className="text">Subtotal:</div>
            <div className="text total">₹{total}</div>
          </div>
          <div className="button">
            <button className="checkout-cta" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
