import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../styles/Button";
import {Tilt} from "react-tilt";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import './Home.css'

const HeroSection = (props) => {
  return (
    <div className="wrapper-background">
      <div className="container">
        <div className="section-inner">
          <div className="section-hero-data">
            <h1 className="heading-text">
              {props.heading} <span className="meal">{props.meal}</span>
            </h1>
            <p className="hero-para">{props.para}</p>
            <Button className="btn">
              <NavLink to="/menu">
                {props.button} <BsFillArrowRightCircleFill />
              </NavLink>
            </Button>
          </div>
          <div className="section-hero-image">
            <picture>
              <Tilt className="Tilt">
                <div className="Tilt-inner">
                  <img className="hero-img" src={props.image} alt="" />
                </div>
              </Tilt>
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
