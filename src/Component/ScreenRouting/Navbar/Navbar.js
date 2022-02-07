import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
  return <>
 <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>EuroClear</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Register"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </>;
}

export default Navbar;
