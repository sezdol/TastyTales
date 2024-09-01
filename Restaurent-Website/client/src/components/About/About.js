import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/Button";
import { Tilt } from "react-tilt";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import './About.css'

const About = () => {
  return (
    <>
      <h1 className="about-heading wrapper-background">
        About <span className="about-sub-heading">Us</span>
      </h1>

      <div className="container">
        <div className="about-section-inner">
          <div className="about-section-hero-image">
            <picture>
              <Tilt className="Tilt">
                <div className="Tilt-inner">
                  <img
                    className="about-hero-img"
                    src="/images/about-img.png"
                    alt=""
                  />
                </div>
              </Tilt>
            </picture>
          </div>
          <div className="about-section-hero-data">
            <h1 className="about-heading-text">Our Vision</h1>
            <div className="about-hero-para">
            <p>
              At TastyTales, we believe that great food is the bridge between cultures, a celebration of traditions, and a journey of flavors. Our restaurant was founded with a passion for culinary storytelling, bringing together the finest ingredients, time-honored recipes, and a dash of innovation to create a dining experience that is both delightful and memorable.
            </p>
            <p>Our chefs are culinary artisans, dedicated to crafting dishes that reflect the rich tapestry of global cuisines. From the aromatic spices of the East to the hearty flavors of the West, each plate at TastyTales is a masterpiece, narrating the tale of its origin and the creativity of our kitchen.
            </p>
            <p> Our cozy and inviting ambiance is designed to make you feel at home, whether you're here for a quick lunch, a family dinner, or a special celebration. With warm lighting, comfortable seating, and a friendly staff, we aim to create a welcoming atmosphere where you can relax and savor the moment.
            </p>
            <p> At TastyTales, we are more than just a restaurant. We are a community of food lovers, adventurers, and storytellers. Join us and become a part of our culinary journey. Let’s create delicious memories together, one bite at a time.
            </p>
            <p> <b>TastyTales</b> – <i>Where every dish has a story.</i>
            </p>
            </div>
            <Button className="about-btn">
              <NavLink to="/contact">
                Know More <BsFillArrowRightCircleFill />
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
