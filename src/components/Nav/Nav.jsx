import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-title">Flysh</span>
      </div>
      <div className="navbar-center">
        <Link to="" className="navbar-link">
          Categories
        </Link>

        <Link to="" className="navbar-link principal">
          Mettre mon produit sur Flysh
        </Link>
      </div>
      <div className="navbar-right">
        {/* <button className="navbar-menu">☰</button> */}
        <div className="navbar-profile">
          {/* <div className="navbar-notification">1</div> */}
          <span className="navbar-initial">E</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
