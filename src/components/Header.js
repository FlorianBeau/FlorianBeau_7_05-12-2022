import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/A_propos">A propos</NavLink>
        </li>
        <li>
          <NavLink to="/Test">Test</NavLink>
        </li>
        <li>
          <NavLink to="/Test2">Test2</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
