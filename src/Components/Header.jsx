import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useCheckOnline from "../utils/useCheckOnline";

const Header = () => {

  const [btn, setBtn] = useState("Login")

  return (

    <div className="header flex justify-between items-center bg-[#FF9494]">

      <div className="logo-container w-16 m-3 p-1">
        <img src={LOGO_URL} alt="logo" />
      </div>

      <div className="links-container">
        <ul className="flex">
          <li className="links mx-20 mb-1 p-4 text-2xl "><Link className="router-link" to="/">Home</Link></li>
          <li className="links mx-20 mb-1 p-4 text-2xl "><Link className="router-link" to="/about">About Us</Link></li>
          <li className="links mx-20 mb-1 p-4 text-2xl "><Link className="router-link" to="/contact">Contact Us</Link></li>
          <li className="links mx-20 mb-1 p-4 text-2xl ">User Cart</li> {/*add a cart icon here later*/}
          <button className="login-btn mx-20 mb-1 p-4 text-2xl" onClick={() => { btn === "Login" ? setBtn("Logout") : setBtn("Login") }}>{btn}</button> {/*simple conditinal rendering */}
        </ul>
      </div>
    </div>

  );
};

export default Header;