import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.js";
import "../styles/styleHeader.sass";

const Header = ({ underlined }) => {
  const selectedStyle = { borderBottom: "2px red solid" };
  const notSelectedStyle = { borderBottom: "0" };
  return (
    <div className="HeaderContainer">
      <Logo />
      <div className="HeaderNavLink NavLink">
        <div>
          <NavLink
            to="/"
            style={underlined === "home" ? selectedStyle : notSelectedStyle}
          >
            Accueil
          </NavLink>
        </div>
        <div className="MarginAbout">
          <NavLink
            to="/A_propos"
            style={underlined === "about" ? selectedStyle : notSelectedStyle}
          >
            A propos
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
