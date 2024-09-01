import React from "react";
import HeroSection from "./HeroSection";
import Menu from "../Menu/Menu";
import './Home.css'

const Home = () => {
  const data = {
    heading: "BREAKFAST SPECIAL",
    meal: "MEAL",
    para: "Real Delicious Food Straight To Your Door. Enjoy this delicious meal with our 1 plus 1 offer & get 2 personal burgers starting @₹279. Order Burgers 1 plus 1 San Francisco Style Burger & get 2 personal burgers starting @ ₹279.",
    button: "Order Online",
    image: "images/hero-img.png",
  };

  return (
    <>
      <HeroSection {...data} />
      <Menu innerPage={true} />
    </>
  );
};


export default Home;
