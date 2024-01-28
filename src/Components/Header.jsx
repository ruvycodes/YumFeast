import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = ()=> {

    return(
  <div className="header">

    <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
    </div>

    <div className="links-container">
        <ul>
            <li className="links">Home</li>
            <li className="links">About Us</li>
            <li className="links">Contact Us</li>
            <li className="links">Cart</li> {/*add a cart icon here later*/}
        </ul>
    </div>
  </div>

    );
};

export default Header;