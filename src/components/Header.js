import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.js";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/A_propos">A propos</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
