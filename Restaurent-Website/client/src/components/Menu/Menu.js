import React from "react";
import Menuitems from "./Menuitems";
import Mdata from "./Mdata";
import './Menu.css';


const Menu = ({ innerPage }) => {
  return (
    <section className="menu">
      {!innerPage && (
        <h1 className="menu-heading wrapper-background">
          Food <span className="menu-sub-heading">Menu</span>
        </h1>
      )}
      <div className="container">
        <div className="products-container">
          <div className="products">
            {Mdata.map((menu) => (
              <Menuitems
                id={menu.id}
                imgsrc={menu.imgsrc}
                pname={menu.pname}
                price={menu.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
