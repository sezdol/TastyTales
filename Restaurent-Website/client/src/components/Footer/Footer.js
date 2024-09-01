import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import './Footer.css'
import { RiInstagramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <div className="col">
            <div className="title">About</div>
            <div className="text">
              At TastyTales, we believe that great food is the bridge between cultures, a celebration of traditions, and a journey of flavors.Our restaurant was founded with a passion for culinary storytelling, bringing together the finest ingredients, time-honored recipes, and a dash of innovation to create a dining experience that is both delightful and memorable.
            </div>
          </div>
          <div className="col">
            <div className="contact-div">
              <div className="title">Contact</div>
              <div className="c-item">
                <FaLocationArrow />
                <div className="text">Nagpur, Maharashtra, India</div>
              </div>
              <div className="c-item">
                <FaMobileAlt />
                <div className="text">Phone: 9876543210</div>
              </div>
              <div className="c-item">
                <FaEnvelope />
                <div className="text">Email: order@tastytales.com</div>
              </div>
            </div>
            <div className="title">Follow Us on</div>
            <div className="social-icons">
              <RiInstagramLine size={20} />
              <FaXTwitter size={20} />
              <FaFacebook size={20} />
            </div>
          </div>

          <div className="col">
            <div className="title">Menu</div>
            <span className="text">Pizza</span>
            <span className="text">Pasta</span>
            <span className="text">Burgers</span>
            <span className="text">Desserts</span>
            <span className="text">Drinks</span>
          </div>
          <div className="col">
            <div className="title">Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Menu</span>
            <span className="text">Contact</span>
            <span className="text">Account</span>
          </div>
        </div>
      </footer >

      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">Made with ❤️ by Brahmprakash Gautam</div>
        </div>
      </div>
    </div >

  );
};

export default Footer;
