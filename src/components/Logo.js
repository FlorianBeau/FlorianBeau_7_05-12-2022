import React from "react";
import logo from "../assets/LOGO.png";
import "../styles/styleHeader.css";

// Composant permattant l'affichage du logo
const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo react"/>
    </div>
  );
};

export default Logo;