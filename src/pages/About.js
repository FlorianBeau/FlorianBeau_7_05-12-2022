import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import BannerImage from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png";

// Fonction fléchée permettant d'afficher le coposant Header et le composant Banner sur la page
// "à propos".
const About = () => {
  return (
    <div>
      <Header underlined={"about"} />
      <Banner imageSrc={BannerImage} title="" />
      <h1>A propos</h1>
      <br />
    </div>
  );
};

export default About;
