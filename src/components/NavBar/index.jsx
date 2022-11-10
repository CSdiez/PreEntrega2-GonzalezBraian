import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./styles.css";

const NavBar = () => {
  return (
    <ul className="container">

        <nav className="links">
            <li className="link">
                       <Link to="/">Inicio</Link>
            </li>
            <div className="list">
                      <li className="link">
                      <Link to={"/category/Saiyan"}  >Saiyan</Link>
                      </li>
                      <li className="link">
                      <Link to={"/category/Angel"}>Angel</Link>
                      </li>
            </div>
            <div className="Cart">
              <CartWidget/>
            </div>
        </nav>     
      
    </ul>
    
  );
};

export default NavBar;
