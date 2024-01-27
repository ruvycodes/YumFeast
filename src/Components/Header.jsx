import React from "react";

const Header = ()=> {

    return(
  <div className="header">

    <div className="logo-container">
        <img src="https://imgs.search.brave.com/n5IRJlONiLwpQJwE6Rq0Bd0Cf--asiWkLMF0oBtHUo4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lMC5w/eGZ1ZWwuY29tL3dh/bGxwYXBlcnMvMTQv/NzA1L2Rlc2t0b3At/d2FsbHBhcGVyLWxv/Z29zLXRyYWZhbGdh/ci1sYXctb25lLXBp/ZWNlLXBpcmF0ZS1s/b2dvLXRodW1ibmFp/bC5qcGc" alt="logo" />
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