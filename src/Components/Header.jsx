import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

  const [btn , setBtn] = useState("Login")

  return (

    <div className="header">

      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>

      <div className="links-container">
        <ul>
          <li className="links"><Link className="router-link" to="/">Home</Link></li>
          <li className="links"><Link className="router-link" to="/about">About Us</Link></li>
          <li className="links"><Link className="router-link" to="/contact">Contact Us</Link></li>
          <li className="links">User Cart</li> {/*add a cart icon here later*/}
          <button className="login-btn" onClick={()=>{btn==="Login"?setBtn("Logout"):setBtn("Login")}}>{btn}</button> {/*simple conditinal rendering */}
        </ul>
      </div>
    </div>

  );
};

export default Header;