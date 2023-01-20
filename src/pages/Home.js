import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import BannerImage from "../assets/LOGO.png";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner imageSrc={BannerImage} title="Chez vous, partout et ailleurs" />
    </div>
  );
};

export default Home;
